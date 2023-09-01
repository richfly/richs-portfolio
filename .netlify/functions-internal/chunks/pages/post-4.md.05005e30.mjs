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

				const html = updateImageReferences("<p>This post should show up with my other blog posts, because <code>Astro.glob()</code> is returning a list of all my posts in order to create my list.</p>");

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"Astro blog post 4","author":"Astro Learner","description":"This post will show up on its own!","image":{"url":"https://docs.astro.build/default-og-image.png","alt":"The word “astro” against an illustration of planets and stars."},"pubDate":"2022-08-08T00:00:00.000Z","tags":["astro","successes"]};
				const file = "C:/Users/Richj/richs-portfolio/src/pages/posts/post-4.md";
				const url = "/posts/post-4";
				function rawContent() {
					return "\r\nThis post should show up with my other blog posts, because `Astro.glob()` is returning a list of all my posts in order to create my list.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
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
