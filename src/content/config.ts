import { z, defineCollection } from 'astro:content';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
	skills: defineCollection({ schema: {
		type: 'content', // v2.5.0 and later
		schema: z.object({
		  title: z.string(),
		  tags: z.array(z.string()),
		  image: z.string().optional(),
		})}}),
	i18n: defineCollection({ type: 'data', schema: i18nSchema() }),
};


