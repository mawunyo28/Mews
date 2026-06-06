import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleUserRound } from "lucide-react";
const Appbar = () => {
  return (
    <div className="flex flex-row gap-5 p-4 px-6 w-full items-center rounded-full ">
      <span className="text-4xl font-semibold">Mews</span>
      <div className="flex gap-4 justify-between cursor-pointer">
        <div>Home</div>
        <div>World</div>
        <div>Tech</div>
        <div>Culture</div>
        <div>Opinion</div>
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
