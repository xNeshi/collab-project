import ProjectCard from "@/components/ProjectCard";
import SearchForm from "../../components/SearchForm";
import { use } from "react";

type searchFormProps = {
  searchParams: Promise<{
    query?: string;
  }>;
};

export default function Home({ searchParams }: searchFormProps) {
  const query = use(searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "John Doe" },
      _id: 1,
      description: "A project to build a new website",
      image: "https://placehold.co/300x200",
      category: "Web Development",
      title: "New Website",
    },
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "John Doe" },
      _id: 2,
      description: "A project to build a new website",
      image: "https://placehold.co/300x200",
      category: "Web Development",
      title: "New Website",
    },
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "John Doe" },
      _id: 3,
      description: "A project to build a new website",
      image: "https://placehold.co/300x200",
      category: "Web Development",
      title: "New Website",
    },
  ];

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
            posts.map((post) => (
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
