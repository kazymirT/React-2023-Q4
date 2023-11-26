import { ErrorBtn } from "../ErrorBtn/ErrorBtn";
import { Search } from "../Search/Search";
import React from "react";

export const Header = () => {
  return (
    <div data-testid={"header"}>
      <ErrorBtn />
      <Search />
    </div>
  );
};
