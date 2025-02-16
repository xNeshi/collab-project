import SearchForm from "../../components/SearchForm";
import { use } from "react";

type searchFormProps = {
  searchParams: Promise<{
    query?: string;
  }>;
};

export default function Home({ searchParams }: searchFormProps) {
  const query = use(searchParams).query;

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
    </>
  );
}
