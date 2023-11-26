import { expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../test/helpers/renderWithRouter";
import { NoResults } from ".";

it("Page404 Component Rendering and Navigation Test", () => {
  renderWithRouter(<NoResults />);

  expect(
    screen.getByText("The search returned no results, please try again."),
  ).toBeInTheDocument();
});
