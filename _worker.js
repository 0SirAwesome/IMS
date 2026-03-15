import { handleRequest } from './runtime-handler.js';

export default {
  async fetch(request, env) {
    return handleRequest(request, env);
  },
};
