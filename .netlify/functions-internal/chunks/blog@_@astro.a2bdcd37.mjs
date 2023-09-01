export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'preact';
import 'preact-render-to-string';

const page = () => import('./pages/blog.astro.db2d5c5e.mjs').then(n => n.b);

export { page };
