import { MouseEventHandler } from "react";
import { Header } from "../Header/Header";
import { Results } from "../Results/Results";
import { Details } from "../Details/Details";

const Layout = () => {
  const arg: boolean = false;

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    const targetElement = event.target as HTMLElement;

    if (targetElement && targetElement.id === "left-page") {
      const newUrl = new URL(location.toString());
      console.log(newUrl);
    }
  };
  return (
    <>
      <Header />
      <div onClick={handleClick}>
        <Results />
        {arg && <Details />}
      </div>
    </>
  );
};

export default Layout;
