import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    channel: z.enum(['seo', 'ppc', 'email', 'analytics']),
    readingTime: z.string().default('5 min'),
    caseStudy: z.boolean().default(false),
    client: z.string().optional(),
    clientTag: z.string().optional(),
    resultNum: z.string().optional(),
    resultLabel: z.string().optional(),
    cover: z.string().optional(),
  }),
});

export const collections = { blog };
