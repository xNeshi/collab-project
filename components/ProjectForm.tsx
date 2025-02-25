"use client";

import React, { startTransition, useActionState, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import MDeditor from "@uiw/react-md-editor";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { formSchema } from "@/lib/validation";
import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const ProjectForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>();
  const [concept, setConcept] = useState<string>();
  const router = useRouter();

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        link: formData.get("link") as string,
        concept,
      };

      await formSchema.parseAsync(formValues);

      // const result = await createProject(prevState, formData, concept);

      // if (result.status === "SUCCESS") {
      //   toast.success("Your Project is Created Successfully");
      //   router.push('/startup/${result.id}')
      // }

      // return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;

        const formattedErrors: Record<string, string> = {};
        for (const key in fieldErrors) {
          if (fieldErrors[key]) {
            formattedErrors[key] = fieldErrors[key]?.join(". ") || ""; // Join errors with a period and space
          }
        }

        setErrors(formattedErrors as unknown as Record<string, string>);

        toast.error("Please check your inputs and try again");

        return { ...prevState, error: "Validation Failed", status: "ERROR" };
      }
      toast.error("An error occurred while creating the project");

      return {
        ...prevState,
        error: "An error occurred while creating the project",
        status: "ERROR",
      };
    }
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <form
      action={formAction}
      onSubmit={handleSubmit}
      className="project-form"
    >
      <div>
        <label
          htmlFor="title"
          className="project-form_label"
        >
          Title
        </label>
        <Input
          id="title"
          name="title"
          className="project-form_input"
          required
          placeholder="Project Title"
        />

        {errors?.title && <p className="project-form_error">{errors.title}</p>}
      </div>

      <div>
        <label
          htmlFor="description"
          className="project-form_label"
        >
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          className="project-form_textarea h-[130px]"
          required
          placeholder="Brief Introduction to your Project"
        />

        {errors?.description && (
          <p className="project-form_error">{errors.description}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="category"
          className="project-form_label"
        >
          category
        </label>
        <Input
          id="category"
          name="category"
          className="project-form_input"
          required
          placeholder="e.g. Technology, Design, etc..."
        />

        {errors?.category && (
          <p className="project-form_error">{errors.category}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="link"
          className="project-form_label"
        >
          Project Image
        </label>
        <Input
          id="link"
          name="link"
          className="project-form_input"
          required
          placeholder="Paste a Project Image URL"
        />

        {errors?.link && (
          <div className="project-form_error text-red-500 text-sm mt-1">
            {errors.link
              .split(". ") // Split camelCase words
              .map((error, index) => (
                <p key={index}>{error}</p>
              ))}
          </div>
        )}
      </div>

      <div data-color-mode="light">
        <label
          htmlFor="concept"
          className="project-form_label"
        >
          Concept Details
        </label>

        <MDeditor
          value={concept}
          onChange={(value) => setConcept(value)}
          id="concept"
          preview="edit"
          height={300}
          className="mt-3"
          style={{
            borderRadius: 25,
            overflow: "hidden",
            border: "3px solid",
          }}
          textareaProps={{
            placeholder:
              "Describe your Project Concept and give the Necessary Details",
          }}
          previewOptions={{
            disallowedElements: ["style"],
          }}
        />

        {errors?.concept && (
          <p className="project-form_error">{errors.concept}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="project-form_btn text-white disabled:opacity-25"
      >
        {isPending ? "Creating Project..." : "Submit your Project"}
        <Send className="size-6 ml-2" />
      </Button>
    </form>
  );
};

export default ProjectForm;
