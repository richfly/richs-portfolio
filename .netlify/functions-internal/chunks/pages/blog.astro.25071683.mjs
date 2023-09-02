import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, g as renderTransition } from '../astro.3487e211.mjs';
import { $ as $$BaseLayout } from './about.astro.78b9c17e.mjs';
import 'clsx';
/* empty css                            */
const $$Astro$1 = createAstro();
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li><a${addAttribute(url, "href")}>${title}</a></li>`;
}, "C:/Users/Richj/richs-portfolio/src/components/BlogPost.astro", void 0);

const $$Astro = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('./post-1.md.27059911.mjs').then(n => n.p),"./posts/post-2.md": () => import('./post-2.md.1f4c4d82.mjs'),"./posts/post-3.md": () => import('./post-3.md.59b28e8a.mjs'),"./posts/post-4.md": () => import('./post-4.md.d975f18c.mjs')}), () => "../pages/posts/*.md");
  const pageTitle = "Rich's Astro Blog";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<p>This will update as I learn sheesh</p><ul${addAttribute(renderTransition($$result2, "rrqdwqyn", "", "blogpost"), "data-astro-transition-scope")}>${allPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)}</ul>` })}`;
}, "C:/Users/Richj/richs-portfolio/src/pages/blog.astro", "self");

const $$file = "C:/Users/Richj/richs-portfolio/src/pages/blog.astro";
const $$url = "/blog";

const blog = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Blog,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BlogPost as $, blog as b };
