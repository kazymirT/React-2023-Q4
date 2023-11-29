import { render } from "@testing-library/react";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import React from "react";
import { expect, it } from "vitest";

import { cardResponseMock, createCardsListResponseMock } from "../_mocks";
import Home from "@/pages/details/[id]";

const mockProducts = createCardsListResponseMock(true);

it("Ensure that Details renders correctly", async () => {
  const { getByTestId, findAllByTestId } = render(
    <Home
      cards={{ data: mockProducts }}
      details={{ data: cardResponseMock }}
    />,
    {
      wrapper: MemoryRouterProvider,
    },
  );

  const cards = await findAllByTestId("card");

  expect(cards).toHaveLength(mockProducts.products.length);

  expect(getByTestId("details")).toBeInTheDocument();
});
