import { file } from "astro/loaders";
import { defineCollection } from "astro:content";
import { CardSchema } from "./schemas/card";

const cards = defineCollection({
  loader: file("content/cards.yaml"),
  schema: CardSchema,
});

const gallery = defineCollection({
  loader: file("content/gallery.yaml"),
  schema: CardSchema,
});

export const collections = { cards, gallery };
