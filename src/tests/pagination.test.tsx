import React from "react";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import { Pagination } from "@/components/Pagination/Pagination";

vi.mock("next/router", () => vi.importActual("next-router-mock"));

describe("Tests for the Pagination component", () => {
  it("The component updates URL query parameter when page changes", async () => {
    const limit = 10;
    const total = 30;
    const page = 2;
    const skip: number = (page - 1) * limit;
    const currentPage = Number(skip) / Number(limit) + 1;
    const totalPages = Math.ceil(total / limit);
    const onChange = vi.fn();

    mockRouter.push("/");
    render(
      <Pagination
        limit={limit}
        page={page}
        total={total}
        onChange={onChange}
      />,
      {
        wrapper: MemoryRouterProvider,
      },
    );
    expect(screen.getByTestId("pagination")).toMatchSnapshot();
    expect(await screen.findByTestId("pagination")).toBeInTheDocument();
    expect(await screen.findByTestId("btn-prev")).toBeInTheDocument();
    expect(await screen.findByTestId("btn-next")).toBeInTheDocument();
    expect(await screen.findByTestId("pagination-page")).toHaveTextContent(
      `${currentPage}/${totalPages}`,
    );

    fireEvent.click(screen.getByTestId("btn-next"));
    expect(onChange).toHaveBeenCalledWith(Number(page) + 1, totalPages);

    fireEvent.click(screen.getByTestId("btn-prev"));
    expect(onChange).toHaveBeenCalledWith(Number(page) - 1, totalPages);
    cleanup();
  });
});
