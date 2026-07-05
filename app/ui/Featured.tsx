import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { getAllContent } from "../lib/guardian";

export const Featured = async () => {
  const response = await getAllContent();

  return (
    <Carousel>
      <CarouselContent>
        {response.results.map((result: any) => {
          <CarouselItem key={result.id}>
            <div>
              <span>Featured News</span>
              <Separator></Separator>
              <FeaturedNewsCard
                imageUrl={result.fields.thumbnail}
                imageAlt={result.fields?.headline ?? result.webTitle}
                newsTitle={result.fields?.headline}
                authour={result.fields?.byline}
                publishedAt={result.webPublicationDate}
              />
            </div>
          </CarouselItem>;
        })}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export const FeaturedNewsCard = ({
  imageUrl,
  imageAlt,
  newsTitle,
  authour,
  publishedAt,
}: {
  imageUrl: string;
  imageAlt: string;
  newsTitle: string;
  authour: string;
  publishedAt: string;
}) => {
  return (
    <Card className="w-full h-fit">
      <CardHeader>
        <img className="rounded-t-2xl" src={imageUrl} alt={imageAlt} />
      </CardHeader>
      <CardContent>
        <span className="text-sm">{newsTitle}</span>
        <Separator className="font-bold my-2" />
      </CardContent>

      <CardFooter>
        <div className="flex flex-row flex-1 justify-between">
          <span className="font-light">By {authour}</span>
          <span className="font-light">{publishedAt}</span>
        </div>
      </CardFooter>
    </Card>
  );
};
