import rss, { pagesGlobToRssItems } from '@astrojs/rss';

async function GET() {
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: "https://rich-astro.netlify.app",
    items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('./post-1.md.27059911.mjs').then(n => n.p),"./posts/post-2.md": () => import('./post-2.md.1f4c4d82.mjs'),"./posts/post-3.md": () => import('./post-3.md.59b28e8a.mjs'),"./posts/post-4.md": () => import('./post-4.md.d975f18c.mjs')})),
    customData: `<language>en-us</language>`
  });
}

export { GET };
