export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'preact';
import 'preact-render-to-string';

const page = () => import('./pages/index.astro.ae9a6bc7.mjs').then(n => n.a);

export { page };
