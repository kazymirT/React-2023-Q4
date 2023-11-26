import { ErrorBtn } from "@/components/ErrorBtn/ErrorBtn";
import React from "react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";

describe("Tests for the Error button component", () => {
  it("Error button test;", async () => {
    render(
      <ErrorBoundary>
        <ErrorBtn />
      </ErrorBoundary>,
    );
    expect(await screen.findByRole("button")).toHaveTextContent("Error");
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText("An error occurred")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button"));
    expect(screen.queryByText("An error occurred")).toBe(null);
  });
});
