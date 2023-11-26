import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button, Input } from "./style";
import "jest-styled-components";

describe("Styled Components", () => {
  test("Button has correct styles based on props", () => {
    const { container } = render(<Button type="reset">Reset</Button>);

    expect(container.firstChild).toHaveStyleRule("background-color", "yellow");

    const firstChild = container.firstChild as Element | null;
    fireEvent.mouseOver(
      firstChild ? firstChild : document.createElement("div"),
    );
    expect(container.firstChild).toHaveStyleRule(
      "background-color",
      "lightyellow",
      {
        modifier: ":hover",
      },
    );
  });

  test("Input has correct border color based on props", () => {
    const { container } = render(<Input value="Test" />);

    expect(container.firstChild).toHaveStyleRule("border-color", "green");
  });
});
