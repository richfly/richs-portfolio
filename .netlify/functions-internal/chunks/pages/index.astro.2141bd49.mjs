import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../astro.3487e211.mjs';
import 'clsx';
import { $ as $$BaseLayout } from './about.astro.78b9c17e.mjs';
import 'preact';
import { useState } from 'preact/hooks';
import { jsxs, jsx } from 'preact/jsx-runtime';
/* empty css                            */
function Greeting({
  messages
}) {
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(messages[0]);
  return jsxs("div", {
    children: [jsxs("h3", {
      children: [greeting, "! Thank you for visiting!"]
    }), jsx("button", {
      onClick: () => setGreeting(randomMessage()),
      children: "New Greeting"
    })]
  });
}

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const pageTitle = "Home Page";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h2>Rich Fly</h2>${renderComponent($$result2, "Greeting", Greeting, { "client:load": true, "messages": ["Hi", "Hello", "Howdy", "Hey there"], "client:component-hydration": "load", "client:component-path": "C:/Users/Richj/richs-portfolio/src/components/Greeting.jsx", "client:component-export": "default" })}` })}`;
}, "C:/Users/Richj/richs-portfolio/src/pages/index.astro", void 0);

const $$file$1 = "C:/Users/Richj/richs-portfolio/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('./post-1.md.eeaa31d8.mjs').then(n => n.p),"../posts/post-2.md": () => import('./post-2.md.c46bb299.mjs'),"../posts/post-3.md": () => import('./post-3.md.fde4377c.mjs'),"../posts/post-4.md": () => import('./post-4.md.05005e30.mjs')}), () => "../../pages/posts/*.md");
  const tags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
  const pageTitle = "Tags";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="tags">${tags.map((tag) => renderTemplate`<p class="tag"><a${addAttribute(`${tag}`, "href")}>${tag}</a></p>`)}</div>` })}`;
}, "C:/Users/Richj/richs-portfolio/src/pages/tags/index.astro", void 0);

const $$file = "C:/Users/Richj/richs-portfolio/src/pages/tags/index.astro";
const $$url = "/tags";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
