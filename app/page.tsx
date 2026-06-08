import { Suspense } from "react";
import { LatestNews } from "./ui/LatestNews";
export default function Home() {
  return (
    <div>
      <Suspense fallback=<div>Loading news</div>>
        <LatestNews></LatestNews>
      </Suspense>
    </div>
  );
}
