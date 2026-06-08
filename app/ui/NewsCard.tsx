import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const NewsCard = ({
  imageUrl,
  imageAlt,
  newsTitle,
  authour,
  publishedAt,
}: {
  imageUrl: string;
  imageAlt: string;
  newsTitle: string;
  publishedAt: string;
  authour: string;
}) => {
  return (
    <Card className="w-101 h-fit">
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
