import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import slugify from "slugify";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatViews(views: number): string {
  if (views <= 1) return `${views.toString()} View`;
  if (views < 1_000) return `${views.toString()} Views`;
  if (views < 1_000_000) return `${(views / 1_000).toFixed(1)}K Views`;
  if (views < 1_000_000_000) return `${(views / 1_000_000).toFixed(1)}M Views`;
  return `${(views / 1_000_000_000).toFixed(1)}B Views`;
}

export const generateId = (name: string, email: string) => {
  return (
    email.split("@")[0] +
    "-" +
    slugify(name, { lower: true, strict: true }) +
    "-" +
    Math.floor(Math.random() * 10000)
  );
};
