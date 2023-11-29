import { render } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import React from "react";
import { expect, it } from "vitest";

import { createCardsListResponseMock } from "../_mocks";
import Home from "@/pages";

const mockProducts = createCardsListResponseMock(true);
it("Ensure that Home renders correctly", async () => {
  mockRouter.push("/?search=test");

  const { getByTestId, findAllByTestId } = render(
    <Home cards={{ data: mockProducts }} />,
    {
      wrapper: MemoryRouterProvider,
    },
  );

  const cards = await findAllByTestId("card");
  const inputElement = getByTestId("search-input") as HTMLInputElement;

  expect(cards).toHaveLength(mockProducts.products.length);
  expect(inputElement.value).toBe("test");
});
