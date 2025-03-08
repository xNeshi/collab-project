import { cn, formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Author, Project } from "@/sanity/types";
import { Skeleton } from "./ui/skeleton";

export type ProjectCardType = Omit<Project, "author"> & { author?: Author };

export const ProjectCard = ({ project }: { project: ProjectCardType }) => {
  const {
    _createdAt,
    views,
    description,
    author,
    title,
    category,
    _id,
    image,
  } = project;

  return (
    <li className="project-card group">
      <div className="flex-between">
        <p className="project-card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5">
        <div className="flex flex-col w-fit overflow-clip">
          <Link
            href={`/user/${author?._id}`}
            className="flex size-fit"
          >
            <p className="text-16-medium line-clamp-1 size-fit">
              {author?.name}
            </p>
          </Link>
          <Link href={`/project/${_id}`}>
            <p className="text-26-semibold line-clamp-1 size-fit overflow-ellipsis">
              {title}
            </p>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
          <Image
            src={author?.image!}
            alt="avatar"
            width={48}
            height={48}
            className="avatar flex-shrink-0"
          ></Image>
        </Link>
      </div>

      <Link href={`/project/${_id}`}>
        <p className="project-card_desc">{description}</p>
        <img
          src={image}
          alt="project image"
          className="project-card_img"
        ></img>
      </Link>
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button
          className="project-card_btn"
          asChild
        >
          <Link href={`/project/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export const ProjectCardSkeleton = () => {
  return (
    <>
      {[0, 1, 2, 3, 4].map((index: number) => (
        <li key={cn("skeleton", index)}>
          <Skeleton className="project-card_skeleton" />
        </li>
      ))}
    </>
  );
};

export default ProjectCard;
