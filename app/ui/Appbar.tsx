import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";
const Appbar = () => {
  return (
    <div className="flex flex-row gap-5 p-4 px-6 w-full items-center rounded-full ">
      <span className="text-4xl ">Mews</span>
      <div className="flex gap-4 justify-between cursor-pointer">
        <Link href="/">
          <span>Home</span>
        </Link>

        <Link href="/headlines">
          <span>Headlines</span>
        </Link>
        <span>Tech</span>
        <span>Culture</span>
        <span>Opinion</span>
      </div>

      <Input placeholder="Search" type="text"></Input>
      <Button variant="outline" arial-label="signin">
        SignIn
      </Button>
      <Button>
        <CircleUserRound />
      </Button>
    </div>
  );
};

export default Appbar;
