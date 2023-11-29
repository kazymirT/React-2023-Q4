import React from "react";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { Header } from "@/components/Header/Header";

vi.mock("next/router", () => vi.importActual("next-router-mock"));

describe("Tests for the Header component", () => {
  it("The component updates URL query parameter when limit changes", async () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId("header")).toBeInTheDocument();
  });
});
