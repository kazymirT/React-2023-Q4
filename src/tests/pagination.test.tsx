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
    const onChange = vi.fn();

    mockRouter.push("/");
    render(<Pagination limit={10} page={2} total={30} onChange={onChange} />, {
      wrapper: MemoryRouterProvider,
    });
    expect(await screen.findByTestId("pagination")).toBeInTheDocument();
    expect(await screen.findByTestId("btn-prev")).toBeInTheDocument();
    expect(await screen.findByTestId("btn-next")).toBeInTheDocument();
    expect(await screen.findByTestId("pagination-page")).toHaveTextContent(
      `${2}/${3}`,
    );

    fireEvent.click(screen.getByTestId("btn-next"));
    expect(onChange).toHaveBeenCalledWith(3, 3);

    fireEvent.click(screen.getByTestId("btn-prev"));
    expect(onChange).toHaveBeenCalledWith(1, 3);
    cleanup();
  });
});
