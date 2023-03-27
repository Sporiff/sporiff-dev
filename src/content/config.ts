import { z, defineCollection } from 'astro:content';
import { rssSchema } from '@astrojs/rss';

const blog = defineCollection({
  schema: rssSchema.extend({
   author: z.string(),
   image: z.string().optional(),
   alt: z.string().optional()
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = { blog };