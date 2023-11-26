import React from "react";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ProductsType } from "@/components/type/type";
import { Details } from "@/components/Details/Details";
import mockRouter from "next-router-mock";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

vi.mock("next/router", () => vi.importActual("next-router-mock"));
const data: ProductsType = {
  brand: "Apple",
  category: "smartphones",
  description: "An apple mobile which is nothing like apple",
  discountPercentage: 12.96,
  id: 1,
  images: [
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  ],
  price: 549,
  rating: 4.69,
  stock: 94,
  thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  title: "iPhone 9",
};

describe("Tests for the Detailed Card component", () => {
  it("Detailed card component correctly displays the detailed card data;", async () => {
    render(<Details data={data} />);
    expect(await screen.findByTestId("details-title")).toHaveTextContent(
      "iPhone 9",
    );
    expect(screen.getByText("Brand: Apple")).toBeInTheDocument();
    expect(screen.getByText("Category: smartphones")).toBeInTheDocument();
  });

  it("Clicking the close button hides the component.", async () => {
    mockRouter.push("/details/2");
    render(<Details data={data} />, { wrapper: MemoryRouterProvider });
    expect(await screen.findByTestId("details")).toBeInTheDocument();
    expect(screen.getByTestId("details")).toMatchSnapshot();
    fireEvent.click(screen.getByTestId("details-cancel"));
    expect(mockRouter.asPath).toEqual("/?limit=5&page=1&search=");
  });
});
