import { Suspense } from "react";
import { LatestSection } from "../ui/LatestStory";
import { Loading } from "../ui/Loading";

const Section = async ({
  params,
}: {
  params: Promise<{ section: string }>;
}) => {
  return (
    <Suspense fallback=<Loading></Loading>>
      <LatestSection params={params}></LatestSection>
    </Suspense>
  );
};

export default Section;
