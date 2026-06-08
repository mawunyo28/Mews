import { Separator } from "@/components/ui/separator";
import { NewsCard } from "./NewsCard";
import { getBySection } from "../lib/guardian";

export const LatestSection = async ({
  params,
}: {
  params: Promise<{ section: string }>;
}) => {
  const { section } = await params;
  const response = await getBySection(section);

  return (
    <div className="flex flex-col">
      <span className="flex px-5 justify-center py-4 text-2xl">
        Latest in {section}
      </span>
      <Separator />

      <div className="grid grid-cols-4  gap-2">
        {response.results.map((result) => (
          <NewsCard
            key={result.id}
            imageUrl={result.fields.thumbnail}
            imageAlt={result.fields?.headline ?? result.webTitle}
            authour={result.fields.byline}
            publishedAt={result.webPublicationDate}
            newsTitle={result.fields?.headline ?? result.fields.webTitle}
          ></NewsCard>
        ))}
      </div>
    </div>
  );
};
