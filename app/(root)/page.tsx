import SearchForm from "../../components/SearchForm";
import { use } from "react";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { ProjectCard, ProjectCardType } from "@/components/ProjectCard";

type searchFormProps = {
  searchParams: Promise<{
    query?: string;
  }>;
};

export default async function Home({ searchParams }: searchFormProps) {
  const query = (await searchParams).query;
  const posts = await client.fetch(PROJECTS_QUERY);
  return (
    <>
      <section className="main_container">
        <h1 className="heading">
          Collab on projects, <br /> Connect with people to collaborate with.
        </h1>
        <p className="sub-heading">
          Post your Projects, Find Peers with Same Interest, and Collaborate to
          Complete your Goal
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "Latest Projects"}
        </p>

        <ul className="grid_card mt-7 ">
          {posts?.length > 0 ? (
            posts.map((post: ProjectCardType) => (
              <ProjectCard
                key={post._id}
                project={post}
              />
            ))
          ) : (
            <p className="no-reults">No projects found</p>
          )}
        </ul>
      </section>
    </>
  );
}
