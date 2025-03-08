import { client } from "@/sanity/lib/client";
import { PROJECTS_BY_AUTHOR_ID_QUERY } from "@/sanity/lib/queries";
import React from "react";
import ProjectCard, { ProjectCardType } from "./ProjectCard";

export const UserProjects = async ({ id }: { id: string }) => {
  const posts = await client.fetch(PROJECTS_BY_AUTHOR_ID_QUERY, { id });

  return (
    <>
      {posts.length > 0 ? (
        posts.map((post: ProjectCardType) => (
          <ProjectCard
            key={post._id}
            project={post}
          />
        ))
      ) : (
        <p className="no-result">No projects found</p>
      )}
    </>
  );
};

export default UserProjects;
