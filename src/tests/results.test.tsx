import { fireEvent, render } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { MemoryRouterProvider } from "next-router-mock/dist/MemoryRouterProvider";
import React from "react";
import { describe, expect, it, vi } from "vitest";

import { createCardsListResponseMock } from "./_mocks";
import { Cards } from "@/components/Cards/Carts";
import { Results } from "@/components/Results/Results";

vi.mock("next/router", () => vi.importActual("next-router-mock"));
const { products } = createCardsListResponseMock(true);

describe("Tests for the Card List component", () => {
  it("Component renders the specified number of cards - 3", async () => {
    mockRouter.push("?limit=5&page=1&search=");
    const { findAllByText, getAllByTestId } = render(
      <Cards products={products} />,
      {
        wrapper: MemoryRouterProvider,
      },
    );
    expect(await findAllByText(/iPhone 9/)).toHaveLength(3);
    fireEvent.click(getAllByTestId("card")[0]);
    expect(mockRouter.asPath).toEqual("/details/1?limit=5&page=1&search=");
  });

  it("An appropriate message is displayed if no cards are present", async () => {
    const { getByText, queryByText } = render(
      <Results data={createCardsListResponseMock(false)} />,
    );

    expect(queryByText("Nothing foundddddddddddd:(")).toBeFalsy();
    expect(
      getByText("The search returned no results, please try again."),
    ).toBeTruthy();
    expect(queryByText(/testCard/)).toBeFalsy();
  });
});
