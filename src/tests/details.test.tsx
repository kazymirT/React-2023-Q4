import React from "react";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

import { cardResponseMock } from "./_mocks";
import { Details } from "@/components/Details/Details";

vi.mock("next/router", () => vi.importActual("next-router-mock"));
const product = cardResponseMock;
describe("Tests for the Detailed Card component", () => {
  it("Detailed card component correctly displays the detailed card data;", async () => {
    const { findByTestId, getByText } = render(<Details data={product} />);

    expect(await findByTestId("details-title")).toHaveTextContent("iPhone 9");
    expect(getByText("Brand: Apple")).toBeInTheDocument();
    expect(getByText("Category: smartphones")).toBeInTheDocument();
  });

  it("Clicking the close button hides the component.", async () => {
    mockRouter.push("/details/2?limit=5&page=1&search=");
    const { getByTestId, findByTestId } = render(<Details data={product} />, {
      wrapper: MemoryRouterProvider,
    });
    expect(await findByTestId("details")).toBeInTheDocument();
    fireEvent.click(getByTestId("details-cancel"));
    expect(mockRouter.asPath).toEqual("/?limit=5&page=1&search=");
  });
});
