import { PROJECT_BY_ID_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import markdownit from "markdown-it";

const md = markdownit();
export const experimental_ppr = true;

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export const Page = async ({ params }: PageProps) => {
  const id = (await params).id;
  const post = await client.fetch(PROJECT_BY_ID_QUERY, { id });

  if (!post) return notFound();

  const parsedContent = md.render(post?.concept || "");

  return (
    <>
      <section className="main_container min-h-[230px]">
        <p className="tag">{formatDate(post._createdAt)}</p>
        <h1 className="heading">{post.title}</h1>
        <p className="sub-heading">{post.description}</p>
      </section>

      <section className="section_container">
        <div className="w-full md:h-[500px] h-fit rounded-xl border-4 overflow-clip shadow-200 shadow-primary">
          <img
            src={post.image}
            alt="project image"
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${post.author?._id}`}
              className="flex gap-4 items-center mb-3"
            >
              <Image
                src={post.author.image}
                width={64}
                height={64}
                alt="avatar"
                className="rounded-full drop-shadow-lg"
              />
              <div>
                <p className="text-20-medium">{post.author.name}</p>
                <p className="text-20-medium !text-black-300">
                  @{post.author.username}
                </p>
              </div>
            </Link>

            <p className="category-tag">{post.category}</p>
          </div>

          <h3 className="text-30-bold">Concept Details</h3>
          <div className="w-full border-4 border-b-black-300"></div>
          {parsedContent ? (
            <article
              className="prose max-w-4xl"
              dangerouslySetInnerHTML={{
                __html: parsedContent,
              }}
            />
          ) : (
            <p className="no-result">No details provided</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Page;
