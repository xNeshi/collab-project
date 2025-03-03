import { link } from "fs";
import { z } from "zod";

const charLimits = {
  title: { min: 3, max: 60 },
  description: { min: 50, max: 200 },
  category: { min: 3, max: 30 },
  concept: { min: 50 },
};

const errorMessages = {
  title: `Title must be between ${charLimits.title.min} and ${charLimits.title.max} characters`,
  description: `Description must be between ${charLimits.description.min} and ${charLimits.description.max} characters`,
  category: `Category must be between ${charLimits.category.min} and ${charLimits.category.max} characters`,
  link: "Link must be a valid URL",
  image: "Link should contain a valid image URL",
  concept: `Concept must be at least ${charLimits.concept.min} characters`,
};

export const formSchema = z.object({
  title: z
    .string()
    .min(charLimits.title.min, errorMessages.title)
    .max(charLimits.title.max, errorMessages.title),
  description: z
    .string()
    .min(charLimits.description.min, errorMessages.description)
    .max(charLimits.description.max, errorMessages.description),
  category: z
    .string()
    .min(charLimits.category.min, errorMessages.category)
    .max(charLimits.category.max, errorMessages.category),
  link: z
    .string()
    .url(errorMessages.link)
    .refine(async (url) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        const contentType = res.headers.get("content-type");
        return contentType?.startsWith("image/");
      } catch {
        return false;
      }
    }, errorMessages.image),
  concept: z.string().min(charLimits.concept.min, errorMessages.concept),
});
