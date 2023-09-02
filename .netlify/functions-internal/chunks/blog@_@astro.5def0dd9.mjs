export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'preact';
import 'preact-render-to-string';

const page = () => import('./pages/blog.astro.25071683.mjs').then(n => n.b);

export { page };
