import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export const ProjectCard = ({ project }: { project: ProjectCard }) => {
  const {
    _createdAt,
    views,
    description,
    author: { id: authorId, name },
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

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{name}</p>
          </Link>
          <Link href={`/project/${_id}`}>
            <p className="text-26-semibold line-clamp-1">{title}</p>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src="https://placehold.co/48x48"
            alt="avatar"
            width={48}
            height={48}
            className="rounded-full"
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
        <Link href={`/?query=${category.toLowerCase()}`}>
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

export default ProjectCard;
