import { expect, test } from "vitest";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithRouter } from "../../test/helpers/renderWithRouter";
import { ChildComponent } from "./ChildComponents";
import { ProductsType } from "../../type/type";

const testData: ProductsType = {
  id: 1,
  title: "test title",
  description: "test description",
  price: 100,
  discountPercentage: 10,
  rating: 5,
  stock: 23,
  brand: "test brand",
  category: "test category",
  thumbnail: "test thumbnail",
  images: ["test images 1", "test images 2", "test images 3"],
};

describe("ChildComponent", () => {
  test("init ChildComponents", () => {
    renderWithRouter(<ChildComponent data={testData} />);

    const navLink = screen.getByRole("link");
    const img = screen.getByAltText(testData.title);

    expect(screen.getByText(testData.title)).toBeInTheDocument();
    expect(navLink).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(navLink).not.toHaveClass("active");
    expect(navLink).not.toHaveClass("pending");
  });

  test("click NavLink", () => {
    renderWithRouter(<ChildComponent data={testData} />);

    const navLink = screen.getByRole("link");
    expect(navLink).not.toHaveClass("active");

    fireEvent.click(screen.getByRole("link"));
    expect(navLink).toHaveClass("active");
    expect(navLink).not.toHaveClass("pending");
  });
});
