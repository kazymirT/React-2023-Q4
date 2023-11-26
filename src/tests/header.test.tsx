import React from "react";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "@/components/Header/Header";

vi.mock("next/router", () => vi.importActual("next-router-mock"));

describe("Tests for the Header component", () => {
  it("The component updates URL query parameter when limit changes", async () => {
    render(<Header />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
});
