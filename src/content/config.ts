import { defineCollection, z } from "astro:content";
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    authImage: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    summary: z.string(),
    type: z.enum(["Article", "Tutorial"]),
    publish: z.boolean().default(true),
  }),
});

export const collections = {
  blog: blogCollection,
};
