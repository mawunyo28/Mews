import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
export const Featured = () => {
  return (
    <Card className="w-max">
      <CardContent>
        <p className="relative top-3 left-5 text-white">Featured</p>
        <img
          width={400}
          height={400}
          src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2026-04/260408-doj-sign-gk-faacea.jpg"
          alt="/"
          className="rounded-t-xl"
        ></img>
      </CardContent>
    </Card>
  );
};
