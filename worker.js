const DISCORD_AUTH_BASE = 'https://discord.com/oauth2/authorize';
const DISCORD_TOKEN_URL = 'https://discord.com/api/oauth2/token';
const DISCORD_ME_URL = 'https://discord.com/api/users/@me';
const DEFAULT_MEDWORDLE_COMPLETION_WEBHOOK = 'https://discord.com/api/webhooks/1482379856405729392/28_h_rPMXgHNO5zZ6uc32GTZOHQr1ssO6zflHeyNYG_wTL8COtY_QSnokxKZyVv7HNsa';
const DEFAULT_MEDWORDLE_DISCORD_SOLVE_WEBHOOK = 'https://discord.com/api/webhooks/1482827788254969889/8XXSh4dr3CSmG94pVhMv3yqFwJZi24zFKcqWE40GEP9K3SeOvDy46duTBH1HJl0JRCsY';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/auth/discord/start') {
      return startDiscordAuth(request, env);
    }
    if (url.pathname === '/api/auth/discord/callback') {
      return handleDiscordCallback(request, env);
    }
    if (url.pathname === '/api/auth/discord/session') {
      return getDiscordSession(request, env);
    }
    if (url.pathname === '/api/auth/discord/logout') {
      return clearDiscordSession();
    }
    if (url.pathname === '/api/medwordle/completed') {
      return handleMedWordleCompletion(request, env);
    }
    if (url.pathname === '/api/medwordle/discord-solved') {
      return handleMedWordleDiscordSolved(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

function redirect(location, headers = {}) {
  return new Response(null, { status: 302, headers: { location, ...headers } });
}

function redirectWithCookies(location, cookies = []) {
  const headers = new Headers({ location });
  cookies.forEach(c => headers.append('Set-Cookie', c));
  return new Response(null, { status: 302, headers });
}

function jsonWithHeaders(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      ...extraHeaders,
    },
  });
}

function parseCookies(request) {
  const header = request.headers.get('cookie') || '';
  return Object.fromEntries(
    header
      .split(';')
      .map(v => v.trim())
      .filter(Boolean)
      .map(v => {
        const i = v.indexOf('=');
        if (i < 0) return [v, ''];
        return [v.slice(0, i), decodeURIComponent(v.slice(i + 1))];
      }),
  );
}

function base64UrlEncode(bytes) {
  let str = '';
  for (const b of bytes) str += String.fromCharCode(b);
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function base64UrlEncodeText(text) {
  return base64UrlEncode(new TextEncoder().encode(text));
}

function base64UrlDecodeText(text) {
  const b64 = text.replace(/-/g, '+').replace(/_/g, '/');
  const pad = b64.length % 4 ? '='.repeat(4 - (b64.length % 4)) : '';
  const raw = atob(b64 + pad);
  const bytes = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

async function hmacSha256(secret, input) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(input));
  return base64UrlEncode(new Uint8Array(sig));
}

async function createSignedValue(payload, secret) {
  const encoded = base64UrlEncodeText(JSON.stringify(payload));
  const sig = await hmacSha256(secret, encoded);
  return `${encoded}.${sig}`;
}

async function verifySignedValue(token, secret) {
  if (!token || !token.includes('.')) return null;
  const [encoded, sig] = token.split('.');
  const expected = await hmacSha256(secret, encoded);
  if (sig !== expected) return null;
  try {
    return JSON.parse(base64UrlDecodeText(encoded));
  } catch {
    return null;
  }
}

function getDiscordClientId(env) {
  return env.DISCORD_CLIENT_ID || '1482364378102894843';
}

function cookieAttrs(maxAge) {
  const attrs = [
    'Path=/',
    'HttpOnly',
    'Secure',
    'SameSite=Lax',
  ];
  if (typeof maxAge === 'number') attrs.push(`Max-Age=${maxAge}`);
  return attrs.join('; ');
}

async function startDiscordAuth(request, env) {
  const origin = new URL(request.url).origin;
  const redirectUri = env.DISCORD_REDIRECT_URI || `${origin}/api/auth/discord/callback`;
  const discordClientId = getDiscordClientId(env);
  if (!discordClientId) return redirect('/#discord_auth_error=server_config');

  const stateBytes = new Uint8Array(24);
  crypto.getRandomValues(stateBytes);
  const state = base64UrlEncode(stateBytes);

  const authUrl = new URL(DISCORD_AUTH_BASE);
  authUrl.searchParams.set('client_id', discordClientId);
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('scope', 'identify email');
  authUrl.searchParams.set('redirect_uri', redirectUri);
  authUrl.searchParams.set('state', state);
  authUrl.searchParams.set('prompt', 'consent');

  return redirect(authUrl.toString(), {
    'Set-Cookie': `ims_discord_state=${encodeURIComponent(state)}; ${cookieAttrs(600)}`,
  });
}

async function handleDiscordCallback(request, env) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const cookies = parseCookies(request);
  const cookieState = cookies.ims_discord_state;

  if (!code || !state || !cookieState || state !== cookieState) {
    return redirectWithCookies('/#discord_auth_error=state_mismatch', [`ims_discord_state=; ${cookieAttrs(0)}`]);
  }
  const discordClientId = getDiscordClientId(env);
  if (!discordClientId || !env.DISCORD_CLIENT_SECRET) {
    return redirect('/#discord_auth_error=server_config');
  }

  const origin = new URL(request.url).origin;
  const redirectUri = env.DISCORD_REDIRECT_URI || `${origin}/api/auth/discord/callback`;

  const body = new URLSearchParams({
    client_id: discordClientId,
    client_secret: env.DISCORD_CLIENT_SECRET,
    grant_type: 'authorization_code',
    code,
    redirect_uri: redirectUri,
  });

  const tokenRes = await fetch(DISCORD_TOKEN_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body,
  });

  if (!tokenRes.ok) return redirect('/#discord_auth_error=token_exchange');
  const tokenJson = await tokenRes.json();
  const accessToken = tokenJson.access_token;
  if (!accessToken) return redirect('/#discord_auth_error=missing_access_token');

  const meRes = await fetch(DISCORD_ME_URL, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!meRes.ok) return redirect('/#discord_auth_error=profile_fetch');

  const me = await meRes.json();
  if (!me?.id || !me?.username) return redirect('/#discord_auth_error=invalid_profile');

  const profile = {
    id: String(me.id),
    username: String(me.username),
    globalName: me.global_name ? String(me.global_name) : null,
    displayName: me.global_name ? String(me.global_name) : String(me.username),
    email: me.email ? String(me.email).toLowerCase() : null,
    avatarUrl: me.avatar
      ? `https://cdn.discordapp.com/avatars/${me.id}/${me.avatar}.png`
      : null,
    loggedInAt: Date.now(),
  };

  const secret = env.DISCORD_SESSION_SECRET || env.DISCORD_CLIENT_SECRET;
  const signed = await createSignedValue(profile, secret);

  return redirectWithCookies('/#discord_auth=success', [
      `ims_discord_state=; ${cookieAttrs(0)}`,
      `ims_discord_session=${encodeURIComponent(signed)}; ${cookieAttrs(60 * 60 * 24 * 7)}`,
    ]);
}

async function getDiscordSession(request, env) {
  const cookies = parseCookies(request);
  const token = cookies.ims_discord_session;
  if (!token) return json({ ok: false, error: 'not_authenticated' }, 401);

  const secret = env.DISCORD_SESSION_SECRET || env.DISCORD_CLIENT_SECRET;
  const profile = await verifySignedValue(token, secret);
  if (!profile || !profile.id) return json({ ok: false, error: 'invalid_session' }, 401);

  if ((Date.now() - Number(profile.loggedInAt || 0)) > 1000 * 60 * 60 * 24 * 8) {
    return json({ ok: false, error: 'expired' }, 401);
  }

  return json({ ok: true, profile });
}

function clearDiscordSession() {
  return jsonWithHeaders({ ok: true }, 200, {
    'Set-Cookie': `ims_discord_session=; ${cookieAttrs(0)}`,
  });
}


function getMedWordleWebhookUrls(env) {
  const configured = String(env.MEDWORDLE_COMPLETION_WEBHOOK || '').trim();
  const fallback = String(env.MEDWORDLE_COMPLETION_WEBHOOK_FALLBACK || '').trim();
  return [configured, DEFAULT_MEDWORDLE_COMPLETION_WEBHOOK, fallback].filter(Boolean);
}

function getMedWordleDiscordSolveWebhookUrl(env) {
  return String(env.MEDWORDLE_DISCORD_SOLVE_WEBHOOK || '').trim() || DEFAULT_MEDWORDLE_DISCORD_SOLVE_WEBHOOK;
}

async function requireDiscordSession(request, env) {
  const cookies = parseCookies(request);
  const token = cookies.ims_discord_session;
  if (!token) return null;
  const secret = env.DISCORD_SESSION_SECRET || env.DISCORD_CLIENT_SECRET;
  if (!secret) return null;
  const profile = await verifySignedValue(token, secret);
  if (!profile?.id || !profile?.username) return null;
  if ((Date.now() - Number(profile.loggedInAt || 0)) > 1000 * 60 * 60 * 24 * 8) return null;
  return profile;
}

async function handleMedWordleCompletion(request, env) {
  if (request.method !== 'POST') {
    return json({ ok: false, error: 'method_not_allowed' }, 405);
  }

  let payload = null;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }

  const username = String(payload?.username || '').trim();
  if (!username || username === '__guest__') {
    return json({ ok: false, error: 'not_logged_in' }, 400);
  }

  const dateKey = String(payload?.dateKey || '').trim();
  const guessCountRaw = Number(payload?.guessCount);
  const guessCount = Number.isFinite(guessCountRaw) ? guessCountRaw : null;
  const won = Boolean(payload?.won);

  const discordIdRaw = String(payload?.discordId || '').trim();
  const discordId = /^\d{5,32}$/.test(discordIdRaw) ? discordIdRaw : null;
  const mention = discordId ? `<@${discordId}> ` : '';

  const result = won
    ? `won in ${guessCount || '?'} / 6`
    : 'did not solve it (X/6)';

  const message = `${mention}🩺 MedWordle completed by **${username}** — ${result}${dateKey ? ` on ${dateKey}` : ''}.`;

  const webhookUrls = getMedWordleWebhookUrls(env);
  if (!webhookUrls.length) {
    return json({ ok: false, error: 'webhook_not_configured' }, 503);
  }

  let lastError = '';
  for (const webhookUrl of webhookUrls) {
    const webhookRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ content: message }),
    });
    if (webhookRes.ok) {
      return json({ ok: true });
    }
    const errorText = await webhookRes.text().catch(() => '');
    lastError = `${webhookRes.status}: ${errorText.slice(0, 200)}`;
    console.warn('MedWordle webhook attempt failed', { webhookUrl, status: webhookRes.status, error: errorText.slice(0, 200) });
  }

  return json({ ok: false, error: 'webhook_failed', details: lastError }, 502);
}

async function handleMedWordleDiscordSolved(request, env) {
  if (request.method !== 'POST') return json({ ok: false, error: 'method_not_allowed' }, 405);

  const sessionProfile = await requireDiscordSession(request, env);
  if (!sessionProfile) return json({ ok: false, error: 'not_discord_authenticated' }, 401);

  let payload = null;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }

  const solved = payload?.solved === true;
  if (!solved) return json({ ok: false, error: 'not_solved' }, 400);

  const discordUserId = String(payload?.discordUserId || '').trim();
  if (!/^\d{5,32}$/.test(discordUserId) || discordUserId !== String(sessionProfile.id)) {
    return json({ ok: false, error: 'invalid_discord_identity' }, 403);
  }

  const puzzleId = String(payload?.puzzleId || '').trim();
  if (!puzzleId) return json({ ok: false, error: 'missing_puzzle_id' }, 400);

  const attemptsUsed = Number(payload?.attemptsUsed);
  const totalGuesses = Number(payload?.totalGuesses);
  if (!Number.isInteger(attemptsUsed) || attemptsUsed < 1 || attemptsUsed > 6) {
    return json({ ok: false, error: 'invalid_attempts' }, 400);
  }
  if (!Number.isInteger(totalGuesses) || totalGuesses < 1 || totalGuesses > 12) {
    return json({ ok: false, error: 'invalid_guesses' }, 400);
  }

  const displayName = String(payload?.discordDisplayName || '').trim() || String(payload?.discordUsername || '').trim() || 'Unknown User';
  const idempotencyKey = `${discordUserId}:${puzzleId}:solved`;

  const embedFields = [
    { name: 'Player', value: displayName, inline: true },
    { name: 'Attempts', value: `${attemptsUsed}/6`, inline: true },
    { name: 'Guesses', value: String(totalGuesses), inline: true },
  ];
  if (Number.isInteger(Number(payload?.streak))) {
    embedFields.push({ name: 'Streak', value: String(Number(payload.streak)), inline: true });
  }
  if (payload?.solveTime) {
    embedFields.push({ name: 'Time', value: String(payload.solveTime), inline: true });
  }
  if (puzzleId) {
    embedFields.push({ name: 'Puzzle', value: puzzleId, inline: true });
  }

  const webhookPayload = {
    content: `🩺 ${displayName} solved today's MedWordle.`,
    embeds: [
      {
        title: 'MedWordle Solved',
        description: `${displayName} solved the puzzle`,
        fields: embedFields,
        footer: { text: `MedWordle • ${idempotencyKey}` },
        timestamp: String(payload?.solvedAt || new Date().toISOString()),
      },
    ],
  };

  const webhookUrl = getMedWordleDiscordSolveWebhookUrl(env);
  if (!webhookUrl) return json({ ok: false, error: 'webhook_not_configured' }, 503);

  try {
    const webhookRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(webhookPayload),
    });
    if (!webhookRes.ok) {
      const errorText = await webhookRes.text().catch(() => '');
      console.warn('Secondary MedWordle Discord solve webhook failed', { status: webhookRes.status, error: errorText.slice(0, 200), idempotencyKey });
      return json({ ok: false, error: 'webhook_failed' }, 502);
    }
    return json({ ok: true, idempotencyKey });
  } catch (e) {
    console.warn('Secondary MedWordle Discord solve webhook request crashed', { error: String(e), idempotencyKey });
    return json({ ok: false, error: 'webhook_failed' }, 502);
  }
}
