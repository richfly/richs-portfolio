import "cookie";
import "kleur/colors";
import "string-width";
import "@astrojs/internal-helpers/path";
import "./chunks/astro.3487e211.mjs";
import "clsx";
import "mime";
import { compile } from "path-to-regexp";
import "html-escaper";

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose"));
    else if (proc.argv.includes("--silent"));
    else;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments
    .map((segment) => {
      return (
        "/" +
        segment
          .map((part) => {
            if (part.spread) {
              return `:${part.content.slice(3)}(.*)?`;
            } else if (part.dynamic) {
              return `:${part.content}`;
            } else {
              return part.content
                .normalize()
                .replace(/\?/g, "%3F")
                .replace(/#/g, "%23")
                .replace(/%5B/g, "[")
                .replace(/%5D/g, "]")
                .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            }
          })
          .join("")
      );
    })
    .join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(
      rawRouteData.segments,
      rawRouteData._meta.trailingSlash
    ),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute
      ? deserializeRouteData(rawRouteData.redirectRoute)
      : void 0,
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData),
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes,
  };
}

const manifest = deserializeManifest({
  adapterName: "@astrojs/netlify/functions",
  routes: [
    {
      file: "",
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        type: "endpoint",
        route: "/_image",
        pattern: "^\\/_image$",
        segments: [[{ content: "_image", dynamic: false, spread: false }]],
        params: [],
        component: "node_modules/astro/dist/assets/image-endpoint.js",
        pathname: "/_image",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [{ type: "external", value: "/_astro/hoisted.a69e314c.js" }],
      styles: [
        {
          type: "inline",
          content:
            "a[data-astro-cid-yxtifmrq]{padding:.5rem 1rem;color:#fff;background-color:#4c1d95;text-decoration:none;border-radius:.25rem}footer[data-astro-cid-sz7xmlte]{display:flex;gap:1rem;margin-top:2rem}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif;background:#ffd5d5;background-size:224px}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}.hamburger{padding-right:20px;cursor:pointer}.hamburger .line{display:block;width:40px;height:5px;margin-bottom:10px;background-color:#ff9776}.nav-links{width:100%;top:5rem;left:48px;background-color:#ff9776;display:none;margin:0}.nav-links a{display:block;text-align:center;padding:10px 0;text-decoration:none;font-size:1.2rem;font-weight:700;text-transform:uppercase}.nav-links a:hover,.nav-links a:focus{background-color:#ff9776}.expanded{display:unset}@media screen and (min-width: 636px){.nav-links{margin-left:5em;display:block;position:static;width:auto;background:none}.nav-links a{display:inline-block;padding:15px 20px}.hamburger{display:none}}a{color:#00539f;text-decoration:none}.tags{display:flex;flex-wrap:wrap}.tag{margin:.25rem;border:1px #a1a1a1;border-radius:.5em;padding:.5em 1em;font-size:.8em;background-color:#f8fcfd;text-decoration:none}.tag:hover{font-size:.95em;font-weight:600;margin:.1rem}html.dark{background-color:#0d0950;color:#fff}.dark .nav-links a{color:#fff}\n",
        },
      ],
      routeData: {
        route: "/",
        type: "page",
        pattern: "^\\/$",
        segments: [],
        params: [],
        component: "src/pages/index.astro",
        pathname: "/",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [{ type: "external", value: "/_astro/hoisted.a69e314c.js" }],
      styles: [
        {
          type: "inline",
          content:
            "@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\na[data-astro-cid-yxtifmrq]{padding:.5rem 1rem;color:#fff;background-color:#4c1d95;text-decoration:none;border-radius:.25rem}footer[data-astro-cid-sz7xmlte]{display:flex;gap:1rem;margin-top:2rem}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif;background:#ffd5d5;background-size:224px}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}.hamburger{padding-right:20px;cursor:pointer}.hamburger .line{display:block;width:40px;height:5px;margin-bottom:10px;background-color:#ff9776}.nav-links{width:100%;top:5rem;left:48px;background-color:#ff9776;display:none;margin:0}.nav-links a{display:block;text-align:center;padding:10px 0;text-decoration:none;font-size:1.2rem;font-weight:700;text-transform:uppercase}.nav-links a:hover,.nav-links a:focus{background-color:#ff9776}.expanded{display:unset}@media screen and (min-width: 636px){.nav-links{margin-left:5em;display:block;position:static;width:auto;background:none}.nav-links a{display:inline-block;padding:15px 20px}.hamburger{display:none}}a{color:#00539f;text-decoration:none}.tags{display:flex;flex-wrap:wrap}.tag{margin:.25rem;border:1px #a1a1a1;border-radius:.5em;padding:.5em 1em;font-size:.8em;background-color:#f8fcfd;text-decoration:none}.tag:hover{font-size:.95em;font-weight:600;margin:.1rem}html.dark{background-color:#0d0950;color:#fff}.dark .nav-links a{color:#fff}\n",
        },
      ],
      routeData: {
        route: "/rss.xml",
        type: "endpoint",
        pattern: "^\\/rss\\.xml$",
        segments: [[{ content: "rss.xml", dynamic: false, spread: false }]],
        params: [],
        component: "src/pages/rss.xml.js",
        pathname: "/rss.xml",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [{ type: "external", value: "/_astro/hoisted.a69e314c.js" }],
      styles: [
        {
          type: "inline",
          content:
            "a[data-astro-cid-yxtifmrq]{padding:.5rem 1rem;color:#fff;background-color:#4c1d95;text-decoration:none;border-radius:.25rem}footer[data-astro-cid-sz7xmlte]{display:flex;gap:1rem;margin-top:2rem}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif;background:#ffd5d5;background-size:224px}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}.hamburger{padding-right:20px;cursor:pointer}.hamburger .line{display:block;width:40px;height:5px;margin-bottom:10px;background-color:#ff9776}.nav-links{width:100%;top:5rem;left:48px;background-color:#ff9776;display:none;margin:0}.nav-links a{display:block;text-align:center;padding:10px 0;text-decoration:none;font-size:1.2rem;font-weight:700;text-transform:uppercase}.nav-links a:hover,.nav-links a:focus{background-color:#ff9776}.expanded{display:unset}@media screen and (min-width: 636px){.nav-links{margin-left:5em;display:block;position:static;width:auto;background:none}.nav-links a{display:inline-block;padding:15px 20px}.hamburger{display:none}}a{color:#00539f;text-decoration:none}.tags{display:flex;flex-wrap:wrap}.tag{margin:.25rem;border:1px #a1a1a1;border-radius:.5em;padding:.5em 1em;font-size:.8em;background-color:#f8fcfd;text-decoration:none}.tag:hover{font-size:.95em;font-weight:600;margin:.1rem}html.dark{background-color:#0d0950;color:#fff}.dark .nav-links a{color:#fff}\n",
        },
      ],
      routeData: {
        route: "/about",
        type: "page",
        pattern: "^\\/about\\/?$",
        segments: [[{ content: "about", dynamic: false, spread: false }]],
        params: [],
        component: "src/pages/about.astro",
        pathname: "/about",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [{ type: "external", value: "/_astro/hoisted.a69e314c.js" }],
      styles: [
        {
          type: "inline",
          content:
            "@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\na[data-astro-cid-yxtifmrq]{padding:.5rem 1rem;color:#fff;background-color:#4c1d95;text-decoration:none;border-radius:.25rem}footer[data-astro-cid-sz7xmlte]{display:flex;gap:1rem;margin-top:2rem}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif;background:#ffd5d5;background-size:224px}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}.hamburger{padding-right:20px;cursor:pointer}.hamburger .line{display:block;width:40px;height:5px;margin-bottom:10px;background-color:#ff9776}.nav-links{width:100%;top:5rem;left:48px;background-color:#ff9776;display:none;margin:0}.nav-links a{display:block;text-align:center;padding:10px 0;text-decoration:none;font-size:1.2rem;font-weight:700;text-transform:uppercase}.nav-links a:hover,.nav-links a:focus{background-color:#ff9776}.expanded{display:unset}@media screen and (min-width: 636px){.nav-links{margin-left:5em;display:block;position:static;width:auto;background:none}.nav-links a{display:inline-block;padding:15px 20px}.hamburger{display:none}}a{color:#00539f;text-decoration:none}.tags{display:flex;flex-wrap:wrap}.tag{margin:.25rem;border:1px #a1a1a1;border-radius:.5em;padding:.5em 1em;font-size:.8em;background-color:#f8fcfd;text-decoration:none}.tag:hover{font-size:.95em;font-weight:600;margin:.1rem}html.dark{background-color:#0d0950;color:#fff}.dark .nav-links a{color:#fff}\n",
        },
      ],
      routeData: {
        route: "/posts/post-1",
        type: "page",
        pattern: "^\\/posts\\/post-1\\/?$",
        segments: [
          [{ content: "posts", dynamic: false, spread: false }],
          [{ content: "post-1", dynamic: false, spread: false }],
        ],
        params: [],
        component: "src/pages/posts/post-1.md",
        pathname: "/posts/post-1",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [{ type: "external", value: "/_astro/hoisted.a69e314c.js" }],
      styles: [
        {
          type: "inline",
          content:
            "@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\na[data-astro-cid-yxtifmrq]{padding:.5rem 1rem;color:#fff;background-color:#4c1d95;text-decoration:none;border-radius:.25rem}footer[data-astro-cid-sz7xmlte]{display:flex;gap:1rem;margin-top:2rem}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif;background:#ffd5d5;background-size:224px}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}.hamburger{padding-right:20px;cursor:pointer}.hamburger .line{display:block;width:40px;height:5px;margin-bottom:10px;background-color:#ff9776}.nav-links{width:100%;top:5rem;left:48px;background-color:#ff9776;display:none;margin:0}.nav-links a{display:block;text-align:center;padding:10px 0;text-decoration:none;font-size:1.2rem;font-weight:700;text-transform:uppercase}.nav-links a:hover,.nav-links a:focus{background-color:#ff9776}.expanded{display:unset}@media screen and (min-width: 636px){.nav-links{margin-left:5em;display:block;position:static;width:auto;background:none}.nav-links a{display:inline-block;padding:15px 20px}.hamburger{display:none}}a{color:#00539f;text-decoration:none}.tags{display:flex;flex-wrap:wrap}.tag{margin:.25rem;border:1px #a1a1a1;border-radius:.5em;padding:.5em 1em;font-size:.8em;background-color:#f8fcfd;text-decoration:none}.tag:hover{font-size:.95em;font-weight:600;margin:.1rem}html.dark{background-color:#0d0950;color:#fff}.dark .nav-links a{color:#fff}\n",
        },
      ],
      routeData: {
        route: "/posts/post-2",
        type: "page",
        pattern: "^\\/posts\\/post-2\\/?$",
        segments: [
          [{ content: "posts", dynamic: false, spread: false }],
          [{ content: "post-2", dynamic: false, spread: false }],
        ],
        params: [],
        component: "src/pages/posts/post-2.md",
        pathname: "/posts/post-2",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [{ type: "external", value: "/_astro/hoisted.a69e314c.js" }],
      styles: [
        {
          type: "inline",
          content:
            "@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\na[data-astro-cid-yxtifmrq]{padding:.5rem 1rem;color:#fff;background-color:#4c1d95;text-decoration:none;border-radius:.25rem}footer[data-astro-cid-sz7xmlte]{display:flex;gap:1rem;margin-top:2rem}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif;background:#ffd5d5;background-size:224px}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}.hamburger{padding-right:20px;cursor:pointer}.hamburger .line{display:block;width:40px;height:5px;margin-bottom:10px;background-color:#ff9776}.nav-links{width:100%;top:5rem;left:48px;background-color:#ff9776;display:none;margin:0}.nav-links a{display:block;text-align:center;padding:10px 0;text-decoration:none;font-size:1.2rem;font-weight:700;text-transform:uppercase}.nav-links a:hover,.nav-links a:focus{background-color:#ff9776}.expanded{display:unset}@media screen and (min-width: 636px){.nav-links{margin-left:5em;display:block;position:static;width:auto;background:none}.nav-links a{display:inline-block;padding:15px 20px}.hamburger{display:none}}a{color:#00539f;text-decoration:none}.tags{display:flex;flex-wrap:wrap}.tag{margin:.25rem;border:1px #a1a1a1;border-radius:.5em;padding:.5em 1em;font-size:.8em;background-color:#f8fcfd;text-decoration:none}.tag:hover{font-size:.95em;font-weight:600;margin:.1rem}html.dark{background-color:#0d0950;color:#fff}.dark .nav-links a{color:#fff}\n",
        },
      ],
      routeData: {
        route: "/posts/post-3",
        type: "page",
        pattern: "^\\/posts\\/post-3\\/?$",
        segments: [
          [{ content: "posts", dynamic: false, spread: false }],
          [{ content: "post-3", dynamic: false, spread: false }],
        ],
        params: [],
        component: "src/pages/posts/post-3.md",
        pathname: "/posts/post-3",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [{ type: "external", value: "/_astro/hoisted.a69e314c.js" }],
      styles: [
        {
          type: "inline",
          content:
            "@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\na[data-astro-cid-yxtifmrq]{padding:.5rem 1rem;color:#fff;background-color:#4c1d95;text-decoration:none;border-radius:.25rem}footer[data-astro-cid-sz7xmlte]{display:flex;gap:1rem;margin-top:2rem}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif;background:#ffd5d5;background-size:224px}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}.hamburger{padding-right:20px;cursor:pointer}.hamburger .line{display:block;width:40px;height:5px;margin-bottom:10px;background-color:#ff9776}.nav-links{width:100%;top:5rem;left:48px;background-color:#ff9776;display:none;margin:0}.nav-links a{display:block;text-align:center;padding:10px 0;text-decoration:none;font-size:1.2rem;font-weight:700;text-transform:uppercase}.nav-links a:hover,.nav-links a:focus{background-color:#ff9776}.expanded{display:unset}@media screen and (min-width: 636px){.nav-links{margin-left:5em;display:block;position:static;width:auto;background:none}.nav-links a{display:inline-block;padding:15px 20px}.hamburger{display:none}}a{color:#00539f;text-decoration:none}.tags{display:flex;flex-wrap:wrap}.tag{margin:.25rem;border:1px #a1a1a1;border-radius:.5em;padding:.5em 1em;font-size:.8em;background-color:#f8fcfd;text-decoration:none}.tag:hover{font-size:.95em;font-weight:600;margin:.1rem}html.dark{background-color:#0d0950;color:#fff}.dark .nav-links a{color:#fff}\n",
        },
      ],
      routeData: {
        route: "/posts/post-4",
        type: "page",
        pattern: "^\\/posts\\/post-4\\/?$",
        segments: [
          [{ content: "posts", dynamic: false, spread: false }],
          [{ content: "post-4", dynamic: false, spread: false }],
        ],
        params: [],
        component: "src/pages/posts/post-4.md",
        pathname: "/posts/post-4",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [{ type: "external", value: "/_astro/hoisted.a69e314c.js" }],
      styles: [
        {
          type: "inline",
          content:
            "@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\na[data-astro-cid-yxtifmrq]{padding:.5rem 1rem;color:#fff;background-color:#4c1d95;text-decoration:none;border-radius:.25rem}footer[data-astro-cid-sz7xmlte]{display:flex;gap:1rem;margin-top:2rem}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif;background:#ffd5d5;background-size:224px}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}.hamburger{padding-right:20px;cursor:pointer}.hamburger .line{display:block;width:40px;height:5px;margin-bottom:10px;background-color:#ff9776}.nav-links{width:100%;top:5rem;left:48px;background-color:#ff9776;display:none;margin:0}.nav-links a{display:block;text-align:center;padding:10px 0;text-decoration:none;font-size:1.2rem;font-weight:700;text-transform:uppercase}.nav-links a:hover,.nav-links a:focus{background-color:#ff9776}.expanded{display:unset}@media screen and (min-width: 636px){.nav-links{margin-left:5em;display:block;position:static;width:auto;background:none}.nav-links a{display:inline-block;padding:15px 20px}.hamburger{display:none}}a{color:#00539f;text-decoration:none}.tags{display:flex;flex-wrap:wrap}.tag{margin:.25rem;border:1px #a1a1a1;border-radius:.5em;padding:.5em 1em;font-size:.8em;background-color:#f8fcfd;text-decoration:none}.tag:hover{font-size:.95em;font-weight:600;margin:.1rem}html.dark{background-color:#0d0950;color:#fff}.dark .nav-links a{color:#fff}\n",
        },
      ],
      routeData: {
        route: "/blog",
        type: "page",
        pattern: "^\\/blog\\/?$",
        segments: [[{ content: "blog", dynamic: false, spread: false }]],
        params: [],
        component: "src/pages/blog.astro",
        pathname: "/blog",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [{ type: "external", value: "/_astro/hoisted.a69e314c.js" }],
      styles: [
        {
          type: "inline",
          content:
            "@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\na[data-astro-cid-yxtifmrq]{padding:.5rem 1rem;color:#fff;background-color:#4c1d95;text-decoration:none;border-radius:.25rem}footer[data-astro-cid-sz7xmlte]{display:flex;gap:1rem;margin-top:2rem}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif;background:#ffd5d5;background-size:224px}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}.hamburger{padding-right:20px;cursor:pointer}.hamburger .line{display:block;width:40px;height:5px;margin-bottom:10px;background-color:#ff9776}.nav-links{width:100%;top:5rem;left:48px;background-color:#ff9776;display:none;margin:0}.nav-links a{display:block;text-align:center;padding:10px 0;text-decoration:none;font-size:1.2rem;font-weight:700;text-transform:uppercase}.nav-links a:hover,.nav-links a:focus{background-color:#ff9776}.expanded{display:unset}@media screen and (min-width: 636px){.nav-links{margin-left:5em;display:block;position:static;width:auto;background:none}.nav-links a{display:inline-block;padding:15px 20px}.hamburger{display:none}}a{color:#00539f;text-decoration:none}.tags{display:flex;flex-wrap:wrap}.tag{margin:.25rem;border:1px #a1a1a1;border-radius:.5em;padding:.5em 1em;font-size:.8em;background-color:#f8fcfd;text-decoration:none}.tag:hover{font-size:.95em;font-weight:600;margin:.1rem}html.dark{background-color:#0d0950;color:#fff}.dark .nav-links a{color:#fff}\n",
        },
      ],
      routeData: {
        route: "/tags",
        type: "page",
        pattern: "^\\/tags\\/?$",
        segments: [[{ content: "tags", dynamic: false, spread: false }]],
        params: [],
        component: "src/pages/tags/index.astro",
        pathname: "/tags",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
  ],
  base: "/",
  compressHTML: true,
  componentMetadata: [
    [
      "C:/Users/Richj/richs-portfolio/src/pages/posts/post-1.md",
      { propagation: "none", containsHead: true },
    ],
    [
      "C:/Users/Richj/richs-portfolio/src/pages/blog.astro",
      { propagation: "none", containsHead: true },
    ],
    [
      "C:/Users/Richj/richs-portfolio/src/pages/rss.xml.js",
      { propagation: "none", containsHead: true },
    ],
    [
      "C:/Users/Richj/richs-portfolio/src/pages/tags/[tag].astro",
      { propagation: "none", containsHead: true },
    ],
    [
      "C:/Users/Richj/richs-portfolio/src/pages/tags/index.astro",
      { propagation: "none", containsHead: true },
    ],
    [
      "C:/Users/Richj/richs-portfolio/src/pages/posts/post-2.md",
      { propagation: "none", containsHead: true },
    ],
    [
      "C:/Users/Richj/richs-portfolio/src/pages/posts/post-3.md",
      { propagation: "none", containsHead: true },
    ],
    [
      "C:/Users/Richj/richs-portfolio/src/pages/posts/post-4.md",
      { propagation: "none", containsHead: true },
    ],
    [
      "C:/Users/Richj/richs-portfolio/src/pages/about.astro",
      { propagation: "none", containsHead: true },
    ],
    [
      "C:/Users/Richj/richs-portfolio/src/pages/index.astro",
      { propagation: "none", containsHead: true },
    ],
  ],
  renderers: [],
  clientDirectives: [
    [
      "idle",
      '(()=>{var i=t=>{let e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event("astro:idle"));})();',
    ],
    [
      "load",
      '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();',
    ],
    [
      "media",
      '(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener("change",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event("astro:media"));})();',
    ],
    [
      "only",
      '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();',
    ],
    [
      "visible",
      '(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event("astro:visible"));})();',
    ],
  ],
  entryModules: {
    "\u0000@astrojs-ssr-virtual-entry": "entry.mjs",
    "\u0000@astro-renderers": "renderers.mjs",
    "\u0000empty-middleware": "_empty-middleware.mjs",
    "/src/pages/posts/post-2.md": "chunks/pages/post-2.md.1f4c4d82.mjs",
    "/src/pages/posts/post-3.md": "chunks/pages/post-3.md.59b28e8a.mjs",
    "/src/pages/posts/post-4.md": "chunks/pages/post-4.md.d975f18c.mjs",
    "/src/pages/rss.xml.js": "chunks/pages/rss.xml.js.57ba734b.mjs",
    "/src/pages/tags/[tag].astro": "chunks/prerender.f3005ce4.mjs",
    "\u0000@astrojs-manifest": "manifest.b6ddb962.mjs",
    "\u0000@astro-page:node_modules/astro/dist/assets/image-endpoint@_@js":
      "chunks/image-endpoint@_@js.28755bbf.mjs",
    "\u0000@astro-page:src/pages/index@_@astro":
      "chunks/index@_@astro.c97bccd6.mjs",
    "\u0000@astro-page:src/pages/rss.xml@_@js": "chunks/rss.53e23fbf.mjs",
    "\u0000@astro-page:src/pages/about@_@astro":
      "chunks/about@_@astro.5194910b.mjs",
    "\u0000@astro-page:src/pages/posts/post-1@_@md":
      "chunks/post-1@_@md.e5426c3d.mjs",
    "\u0000@astro-page:src/pages/posts/post-2@_@md":
      "chunks/post-2@_@md.1cf20218.mjs",
    "\u0000@astro-page:src/pages/posts/post-3@_@md":
      "chunks/post-3@_@md.02068527.mjs",
    "\u0000@astro-page:src/pages/posts/post-4@_@md":
      "chunks/post-4@_@md.529c6bee.mjs",
    "\u0000@astro-page:src/pages/blog@_@astro":
      "chunks/blog@_@astro.5def0dd9.mjs",
    "\u0000@astro-page:src/pages/tags/index@_@astro":
      "chunks/index@_@astro.5705e6f1.mjs",
    "\u0000@astro-page:src/pages/tags/[tag]@_@astro":
      "chunks/_tag_@_@astro.0738ed0b.mjs",
    "C:/Users/Richj/richs-portfolio/node_modules/astro/dist/assets/services/sharp.js":
      "chunks/sharp.4b9d4c34.mjs",
    "C:/Users/Richj/richs-portfolio/src/components/Greeting.jsx":
      "_astro/Greeting.e0505947.js",
    "@astrojs/preact/client.js": "_astro/client.fee041af.js",
    "/astro/hoisted.js?q=0": "_astro/hoisted.a69e314c.js",
    "C:/Users/Richj/richs-portfolio/node_modules/@preact/signals/dist/signals.module.js":
      "_astro/signals.module.9d29277b.js",
    "astro:scripts/before-hydration.js": "",
  },
  assets: [
    "/favicon.svg",
    "/_astro/client.fee041af.js",
    "/_astro/Greeting.e0505947.js",
    "/_astro/hoisted.a69e314c.js",
    "/_astro/hooks.module.aa47bc6a.js",
    "/_astro/preact.module.995ee422.js",
    "/_astro/signals.module.9d29277b.js",
  ],
});

export { manifest };
