import { Details } from "@/components/Details/Details";
import { Header } from "@/components/Header/Header";
import { Results } from "@/components/Results/Results";
import { useRouter } from "next/router";
import { MouseEventHandler } from "react";

const Home = () => {
  const router = useRouter();
  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    const targetElement = event.target as HTMLElement;
    console.log("left panel");
    if (targetElement && targetElement.id === "left-page") {
      const newUrl = new URL(location.toString());
      // history.push(`/${newUrl.search}`);
      console.log("left panel");
      router.push(newUrl.search);
    }
  };
  return (
    <>
      <Header />
      <div onClick={handleClick}>
        <Results />
        <Details />
      </div>
    </>
  );
};

export default Home;
