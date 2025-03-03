"use server";

import { auth } from "@/app/auth";
import { parseServerActionResponse } from "./utils";
import { error } from "console";
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";

export const createProject = async (
  prevState: any,
  formData: FormData,
  concept: string | undefined
) => {
  const session = await auth();

  if (!session)
    return parseServerActionResponse({
      status: "ERROR",
      error: "Not Signed In",
    });

  const { title, description, category, link } = Object.fromEntries(
    Array.from(formData).filter(([key]) => key !== "concept")
  );

  const slug = slugify(title as string, { lower: true, strict: true });

  try {
    const project = {
      title,
      description,
      category,
      image: link,
      slug: {
        _type: slug,
        current: slug,
      },
      author: {
        _type: "reference",
        _ref: session?.user.id,
      },
      concept,
    };

    const result = await writeClient.create({ _type: "project", ...project });

    return parseServerActionResponse({
      ...result,
      error: "",
      status: "SUCCESS",
    });
  } catch (error) {
    console.log(error);
    return parseServerActionResponse({
      error: JSON.stringify(error),
      status: "ERROR",
    });
  }
};
