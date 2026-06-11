import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import { getSections } from "../lib/guardian";
import { Separator } from "@/components/ui/separator";
import { redirect } from "next/navigation";
const Appbar = async () => {
  // "use cache";
  const data = await getSections();

  const results = data.response.results.slice(1, 6);

  async function handleSearch(formData: FormData) {
    "use server";
    const query = formData.get("q")?.toString().trim();
    if (query) redirect(`/search/${query}`);
  }

  // console.log(results);

  return (
    <>
      {" "}
      <div className="flex flex-row gap-5 p-4 px-6 w-full items-center rounded-full ">
        <Link href="/">
          <span className="text-4xl ">Mews</span>
        </Link>
        {/* <div className="flex gap-4 justify-between cursor-pointer"> */}
        {results.map(
          (section: {
            id: string;
            webTitle: string;
            webUrl: string;
            apiUrl: string;
            editions?: [string | undefined];
          }) => (
            <Link
              key={section.id.toString()}
              href={"/" + section.id.toString()}
            >
              <span>{section.webTitle.split(" ")[0]}</span>
            </Link>
          ),
        )}
        {/* </div> */}

        <form action={handleSearch} className="w-full">
          <Input placeholder="Search" type="text" name="q"></Input>
        </form>

        <Button variant="outline" arial-label="signin" className="hidden">
          SignIn
        </Button>
        <Button className="hidden">
          <CircleUserRound />
        </Button>
      </div>
      <Separator></Separator>
    </>
  );
};

export default Appbar;
