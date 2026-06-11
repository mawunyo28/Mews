import { Suspense } from "react";
import { Loading } from "../../ui/Loading";
import { SearchResults } from "@/app/ui/SearchResult";

const Search = async ({ params }: { params: Promise<{ search: string }> }) => {
  return (
    <Suspense fallback=<Loading></Loading>>
      <SearchResults params={params}></SearchResults>
    </Suspense>
  );
};

export default Search;
