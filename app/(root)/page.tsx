"use client";

import SearchForm from "../../components/SearchForm";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { ProjectCard, ProjectCardType } from "@/components/ProjectCard";
import { client } from "@/sanity/lib/client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type searchFormProps = {
  searchParams: Promise<{
    query?: string;
  }>;
};

export default function Home({ searchParams }: searchFormProps) {
  const search = useSearchParams().get("query");
  const [posts, setPosts] = useState<ProjectCardType[] | null>(null);

  useEffect(() => {
    const loadingPage = async () => {
      const data = await client.fetch(PROJECTS_QUERY, {
        search: search || null,
      });
      setPosts(data);
    };
    loadingPage();
  }, [search]);

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
        <SearchForm query={search as string | undefined} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {search ? `Search results for "${search}"` : "Latest Projects"}
        </p>

        <ul className="grid_card mt-7 ">
          {posts && posts.length > 0 ? (
            posts?.map((post: ProjectCardType) => (
              <Suspense
                key={post._id}
                fallback="Loading..."
              >
                <ProjectCard
                  key={post._id}
                  project={post}
                />
              </Suspense>
            ))
          ) : (
            <p className="no-reults">No projects found</p>
          )}
        </ul>
      </section>
    </>
  );
}
