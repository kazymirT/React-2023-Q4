import React from "react";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";

import Page404 from "../pages/404";

import mockRouter from "next-router-mock";

vi.mock("next/router", () => vi.importActual("next-router-mock"));

describe("Tests for the 404 Page component", () => {
  it("404 page is displayed when navigating to an invalid route.", async () => {
    const { getByText } = render(<Page404 />);

    expect(getByText("404")).toBeInTheDocument();
    expect(getByText("Page not found")).toBeInTheDocument();
    expect(getByText("Go to main page")).toBeInTheDocument();

    fireEvent.click(getByText("Go to main page"));
    expect(mockRouter.asPath).toBe("/");
  });
});
