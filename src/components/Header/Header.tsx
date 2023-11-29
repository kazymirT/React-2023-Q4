import React from "react";

import { ErrorBtn } from "../ErrorBtn/ErrorBtn";
import { Search } from "../Search/Search";

export const Header = () => {
  return (
    <div data-testid={"header"}>
      <ErrorBtn />
      <Search />
    </div>
  );
};
