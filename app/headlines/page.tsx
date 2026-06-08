import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { getTopHeadlines } from "../lib/gnewsFunctions";
import { Separator } from "@/components/ui/separator";

const Headlines = async () => {
  const response = await getTopHeadlines();

  return (
    <Card className="w-100 h-100">
      <CardHeader>
        <img
          className="rounded-t-2xl"
          src={response.articles[0].image}
          alt={response.articles[0].title}
        />
      </CardHeader>
      <CardContent>
        <span className="text-2xl">{response.articles[0].title}</span>
        <Separator className="font-bold" />
      </CardContent>

      <CardFooter>
        <div className="flex flex-row flex-1 justify-between">
          <span className="font-light">
            By {response.articles[0].source.name}
          </span>
          <span className="font-light">{response.articles[0].publishedAt}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Headlines;
