import { Suspense } from "react";
 
import { LatestNews } from "./ui/LatestNews";
import { Loading } from "./ui/Loading";
export default function Home() {
  return (
    <div>
      <Suspense fallback=<Loading></Loading>>
        <LatestNews></LatestNews>
      </Suspense>
    </div>
  );
}
