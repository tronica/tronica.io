import { z } from "astro:schema";

export const CardSchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string(),
  brief: z.string(),
  images: z.array(z.string()),
  href: z.string(),
  tags: z.array(z.string()),
});

export const CardCollectionSchema = z.array(CardSchema);
