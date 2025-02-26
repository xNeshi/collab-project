import ProjectForm from "@/components/ProjectForm";
import React from "react";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

export const Page = () => {
  const session = auth();
  if (!session) redirect("/");

  return (
    <>
      <section className="main_container !min-h-[230px]">
        <h1 className="heading">
          Create your Project, <br /> Detail your Concept
        </h1>
      </section>

      <ProjectForm />
    </>
  );
};

export default Page;
