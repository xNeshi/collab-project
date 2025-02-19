import { sanityFetch } from "@/sanity/lib/live";
import { PROJECT_BY_ID_QUERY } from "@/sanity/lib/queries";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export const Page = async ({ params }: PageProps) => {
  const id = (await params).id;

  return (
    <div>
      <h1>project number:</h1>
    </div>
  );
};

export default Page;
