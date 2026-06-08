import { Suspense } from "react";
import { LatestSection } from "../ui/LatestStory";

const Section = async ({
  params,
}: {
  params: Promise<{ section: string }>;
}) => {
  return (
    <Suspense fallback=<div>Loading Stories</div>>
      <LatestSection params={params}></LatestSection>
    </Suspense>
  );
};

export default Section;
