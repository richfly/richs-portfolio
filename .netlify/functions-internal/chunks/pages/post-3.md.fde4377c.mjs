import { a as createComponent, s as spreadAttributes, r as renderTemplate, d as renderComponent, u as unescapeHTML } from '../astro.3487e211.mjs';
import { $ as $$MarkdownPostLayout } from './post-1.md.eeaa31d8.mjs';
import '@astrojs/internal-helpers/path';
import './image-endpoint.js.e1afe353.mjs';
import 'clsx';
import 'html-escaper';
import './about.astro.78b9c17e.mjs';
/* empty css                            *//* empty css                            */import 'mime/lite.js';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<h2 id=\"what-ive-accomplished\">What I’ve accomplished</h2>\n<ol>\n<li>\n<p><strong>Installing Astro</strong>: First, I created a new Astro project and set up my online accounts.</p>\n</li>\n<li>\n<p><strong>Making Pages</strong>: I then learned how to make pages by creating new <code>.astro</code> files and placing them in the <code>src/pages/</code> folder.</p>\n</li>\n<li>\n<p><strong>Making Blog Posts</strong>: This is my first blog post! I now have Astro pages and Markdown posts!</p>\n</li>\n</ol>\n<h2 id=\"whats-next\">Whats next?</h2>\n<p>I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.</p>");

				const frontmatter = {"layout":"../../layouts/MarkDownPostLayout.astro","title":"Astro Blog Post 3","pubDate":"09.01.2023","description":"This is the first Astro Blog post by Rich","author":"Rich Fly","image":{"url":"https://docs.astro.build/default-og-image.png","alt":"The word “astro” against an illustration of planets and stars."},"tags":["astro","blogging","learning in public"]};
				const file = "C:/Users/Richj/richs-portfolio/src/pages/posts/post-3.md";
				const url = "/posts/post-3";
				function rawContent() {
					return "\r\n## What I've accomplished\r\n\r\n1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.\r\n\r\n2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.\r\n\r\n3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!\r\n\r\n## Whats next?\r\n\r\nI will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"what-ive-accomplished","text":"What I’ve accomplished"},{"depth":2,"slug":"whats-next","text":"Whats next?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});
				Content[Symbol.for('astro.needsHeadRendering')] = false;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
