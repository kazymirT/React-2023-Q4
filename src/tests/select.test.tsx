import React from "react";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import { Select } from "@/components/Select/Select";

vi.mock("next/router", () => vi.importActual("next-router-mock"));

describe("Tests for the Select component", () => {
  it("The component updates URL query parameter when limit changes", async () => {
    const limit = "5";
    const onChange = vi.fn();

    mockRouter.push("/");
    render(<Select limit={limit} onChange={onChange} />, {
      wrapper: MemoryRouterProvider,
    });

    expect(screen.getByText("Cards per page:")).toBeInTheDocument();
  });
});
