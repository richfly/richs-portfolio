import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderHead, f as renderSlot } from '../astro.3487e211.mjs';
import 'clsx';
/* empty css                            */
const $$Astro$7 = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead()}<div class="nav-links"><a href="/">Home</a><a href="/about/">About</a><a href="/blog/">Blog</a><a href="/tags/">Tags</a></div>`;
}, "C:/Users/Richj/richs-portfolio/src/components/Navigation.astro", void 0);

const $$Astro$6 = createAstro();
const $$Hamburger = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hamburger;
  return renderTemplate`${maybeRenderHead()}<div class="hamburger"><span class="line"></span><span class="line"></span><span class="line"></span></div>`;
}, "C:/Users/Richj/richs-portfolio/src/components/Hamburger.astro", void 0);

const $$Astro$5 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Richj/richs-portfolio/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$4 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header><nav>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderComponent($$result, "Hamburger", $$Hamburger, {})}${renderComponent($$result, "Navigation", $$Navigation, {})}</nav></header>`;
}, "C:/Users/Richj/richs-portfolio/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro();
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Social;
  const { platform, username } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`https://www.${platform}.com/${username}`, "href")} data-astro-cid-yxtifmrq>${platform}</a>`;
}, "C:/Users/Richj/richs-portfolio/src/components/Social.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte>${renderComponent($$result, "Social", $$Social, { "platform": "github", "username": "richfly", "data-astro-cid-sz7xmlte": true })}${renderComponent($$result, "Social", $$Social, { "platform": "linkedin", "username": "in/flyr90/", "data-astro-cid-sz7xmlte": true })}${renderComponent($$result, "Social", $$Social, { "platform": "twitter", "username": "astrodotbuild", "data-astro-cid-sz7xmlte": true })}${renderComponent($$result, "Social", $$Social, { "platform": "youtube", "username": "astrodotbuild", "data-astro-cid-sz7xmlte": true })}</footer>`;
}, "C:/Users/Richj/richs-portfolio/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head><body>${renderComponent($$result, "Header", $$Header, {})}<h1>${pageTitle}</h1>${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "C:/Users/Richj/richs-portfolio/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const pageTitle = "About Me";
  const identity = {
    firstName: "Rich",
    country: "USA",
    occupation: "none",
    hobbies: ["Hiking", "tinkering", "webdev"]
  };
  const skills = ["HTML", "CSS", "JavaScript", "React", "Astro", "Writing Docs", "Figma", "Framer"];
  const finished = false;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<p>A few facts about me</p><ul><li>
My name is ${identity.firstName}.
</li><li>
I live in ${identity.country} and i work as a ${identity.occupation}</li>${identity.hobbies.length >= 2 && renderTemplate`<li>
Two of my hobbies are: ${identity.hobbies[0]} and ${identity.hobbies[1]}</li>`}</ul><p>
My skills are:
</p><ul>${skills.map((skill) => renderTemplate`<li>${skill}</li>`)}</ul>${renderTemplate`<p>I am happy to be learning Astro</p>`}${finished }${renderTemplate`<p>My goal is to finish in 3 days</p>` }` })}`;
}, "C:/Users/Richj/richs-portfolio/src/pages/about.astro", void 0);

const $$file = "C:/Users/Richj/richs-portfolio/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayout as $, about as a };
