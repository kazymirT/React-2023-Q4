import React from "react";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

import { Select } from "@/components/Select/Select";

vi.mock("next/router", () => vi.importActual("next-router-mock"));

describe("Tests for the Select component", () => {
  it("The component updates URL query parameter when limit changes", async () => {
    mockRouter.push("/");
    const { getByText } = render(<Select limit={"5"} onChange={vi.fn()} />, {
      wrapper: MemoryRouterProvider,
    });

    expect(getByText("Cards per page:")).toBeInTheDocument();
  });
});
