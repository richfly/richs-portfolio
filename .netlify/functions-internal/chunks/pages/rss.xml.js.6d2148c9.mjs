import rss, { pagesGlobToRssItems } from '@astrojs/rss';

async function GET() {
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: "https://rich-astro.netlify.app",
    items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('./post-1.md.eeaa31d8.mjs').then(n => n.p),"./posts/post-2.md": () => import('./post-2.md.c46bb299.mjs'),"./posts/post-3.md": () => import('./post-3.md.fde4377c.mjs'),"./posts/post-4.md": () => import('./post-4.md.05005e30.mjs')})),
    customData: `<language>en-us</language>`
  });
}

export { GET };
