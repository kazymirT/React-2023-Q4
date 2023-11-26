import { describe, expect, vi } from "vitest";
import { Pagination } from "./Pagination";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Pagination component", () => {
  let onChange: () => void;
  let page: string;
  let total;
  let limit;
  let totalPages: number;

  beforeEach(() => {
    onChange = vi.fn();
    page = "2";
    total = "30";
    limit = "10";
    totalPages = Math.ceil(Number(total) / Number(limit));
    render(
      <Pagination
        total={total}
        page={page}
        limit={limit}
        onChange={onChange}
      />,
    );
  });

  test("next button click updates URL query parameter and calls onChange correctly", () => {
    const nextButton = screen.getByTestId("btn-next");
    fireEvent.click(nextButton);
    expect(onChange).toHaveBeenCalledWith(Number(page) + 1, totalPages);
  });

  test("prev button click updates URL query parameter and calls onChange correctly", () => {
    const prevButton = screen.getByTestId("btn-prev");
    fireEvent.click(prevButton);
    expect(onChange).toHaveBeenCalledWith(Number(page) - 1, totalPages);
  });
});
