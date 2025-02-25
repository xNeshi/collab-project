import { link } from "fs";
import { z } from "zod";

const titleErrorMessage = "Title must be between 3 and 60 characters";
const descriptionErrorMessage =
  "Description must be between 20 and 100 characters";
const categoryErrorMessage = "Category must be between 3 and 30 characters";
const linkErrorMessage = "Link must be a valid URL";
const imageErrorMessage = "Link should contain a valid image URL";
const conceptErrorMessage = "Concept must be at least 50 characters";

export const formSchema = z.object({
  title: z.string().min(3, titleErrorMessage).max(60, titleErrorMessage),
  description: z
    .string()
    .min(20, descriptionErrorMessage)
    .max(100, descriptionErrorMessage),
  category: z
    .string()
    .min(3, categoryErrorMessage)
    .max(30, categoryErrorMessage),
  link: z
    .string()
    .url(linkErrorMessage)
    .refine(async (url) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        const contentType = res.headers.get("content-type");
        return contentType?.startsWith("image/");
      } catch {
        return false;
      }
    }, imageErrorMessage),
  concept: z.string().min(50, conceptErrorMessage),
});
