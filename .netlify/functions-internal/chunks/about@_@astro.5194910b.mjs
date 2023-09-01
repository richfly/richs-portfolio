export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'preact';
import 'preact-render-to-string';

const page = () => import('./pages/about.astro.78b9c17e.mjs').then(n => n.a);

export { page };
