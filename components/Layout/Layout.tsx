import { MouseEventHandler, ReactNode } from "react";
import { Header } from "../Header/Header";
import { Results } from "../Results/Results";
import { Details } from "../Details/Details";
import { NextComponentType, NextPageContext } from "next/types";
type LayoutType = {
  children: Element;
}
const Layout = ( component: LayoutType) => {
  const arg: boolean = false;
  
  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    const targetElement = event.target as HTMLElement;

    if (targetElement && targetElement.id === 'left-page') {
      const newUrl = new URL(location.toString());
      // history.push(`/${newUrl.search}`);
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
  )
};



export default Layout;