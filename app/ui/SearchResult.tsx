import { NewsCard } from "./NewsCard";
import { getBySearch } from "../lib/guardian";

export const SearchResults = async ({
  params,
}: {
  params: Promise<{ search: string }>;
}) => {
  const { search } = await params;
  const response = await getBySearch(search);

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 gap-2">
        {response.results.map((result) => (
          <NewsCard
            key={result.id}
            imageUrl={result.fields.thumbnail}
            imageAlt={result.fields?.headline ?? result.webTitle}
            authour={result.fields.byline}
            publishedAt={result.webPublicationDate}
            newsTitle={result.fields?.headline ?? result.fields.webTitle}
            webUrl={result.webUrl ?? "/"}
          ></NewsCard>
        ))}
      </div>
    </div>
  );
};
