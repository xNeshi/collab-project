import "server-only";

import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, token } from "../env";

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});

if (!writeClient.config().token) {
  throw new Error(
    "Do not expose your token in the client-side code. Use a serverless function to fetch data from Sanity."
  );
}
