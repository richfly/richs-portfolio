import * as adapter from "@astrojs/netlify/netlify-functions.js";
import { renderers } from "./renderers.mjs";
import { manifest } from "./manifestb6ddb962.mjs";
import "preact";
import "preact-render-to-string";
import "cookie";
import "kleur/colors";
import "string-width";
import "@astrojs/internal-helpers/path";
import "./chunks/astro.3487e211.mjs";
import "clsx";
import "html-escaper";
import "mime";
import "path-to-regexp";

const _page0 = () => import("./chunks/image-endpoint@_@js.28755bbf.mjs");
const _page1 = () => import("./chunks/index@_@astro.c97bccd6.mjs");
const _page2 = () => import("./chunks/rss.53e23fbf.mjs");
const _page3 = () => import("./chunks/about@_@astro.5194910b.mjs");
const _page4 = () => import("./chunks/post-1@_@md.e5426c3d.mjs");
const _page5 = () => import("./chunks/post-2@_@md.1cf20218.mjs");
const _page6 = () => import("./chunks/post-3@_@md.02068527.mjs");
const _page7 = () => import("./chunks/post-4@_@md.529c6bee.mjs");
const _page8 = () => import("./chunks/blog@_@astro.5def0dd9.mjs");
const _page9 = () => import("./chunks/index@_@astro.5705e6f1.mjs");
const _page10 = () => import("./chunks/_tag_@_@astro.0738ed0b.mjs");
const pageMap = new Map([
  ["node_modules/astro/dist/assets/image-endpoint.js", _page0],
  ["src/pages/index.astro", _page1],
  ["src/pages/rss.xml.js", _page2],
  ["src/pages/about.astro", _page3],
  ["src/pages/posts/post-1.md", _page4],
  ["src/pages/posts/post-2.md", _page5],
  ["src/pages/posts/post-3.md", _page6],
  ["src/pages/posts/post-4.md", _page7],
  ["src/pages/blog.astro", _page8],
  ["src/pages/tags/index.astro", _page9],
  ["src/pages/tags/[tag].astro", _page10],
]);
const _manifest = Object.assign(manifest, {
  pageMap,
  renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports["handler"];

const _start = "start";
if (_start in adapter) {
  adapter[_start](_manifest, _args);
}

export { handler, pageMap };
