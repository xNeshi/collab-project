import ProjectForm from "@/components/ProjectForm";
import React from "react";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import { LoadingUiTester } from "@/lib/utils";

export const Page = async () => {
  const session = await auth();
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
