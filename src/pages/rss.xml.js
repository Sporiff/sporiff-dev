import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function get(context) {
  const blog = await getCollection('blog');
  blog.sort((b, a) => Date.parse(a.data.pubDate) - Date.parse(b.data.pubDate));
  return rss({
    title: 'Sporiff.dev',
    description: 'Life inside a computer',
    site: context.site,
    stylesheet: '/rss/styles.xsl',
    items: blog.map((post) => ({
      link: `/blog/${post.data.title.replaceAll(' ', '-').toLowerCase()}/`,
      content: sanitizeHtml(parser.render(post.body)),
      ...post.data,
    })),
  });
}