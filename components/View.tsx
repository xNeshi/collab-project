import React from "react";
import Ping from "./Ping";
import { PROJECTS_VIEWS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { formatViews } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import { writeClient } from "@/sanity/lib/write-client";
import { after } from "next/server";

type ViewProps = {
  id: string;
};

export const View = async ({ id }: ViewProps) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(PROJECTS_VIEWS_QUERY, { id });

  after(async () => {
    await writeClient
      .patch(id)
      .set({ views: totalViews + 1 })
      .commit();
  });

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="inline-flex h-fit gap-1 font-black align-middle">
          <EyeIcon className="size-6 text-primary p-0" />
          {formatViews(totalViews)}
        </span>
      </p>
    </div>
  );
};

export default View;
