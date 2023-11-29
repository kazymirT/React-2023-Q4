import { ErrorBtn } from "@/components/ErrorBtn/ErrorBtn";

import React from "react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";

import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";

describe("Tests for the Error button component", () => {
  it("Error button test;", async () => {
    const { findByRole, getByRole, getByText, queryByText } = render(
      <ErrorBoundary>
        <ErrorBtn />
      </ErrorBoundary>,
    );
    expect(await findByRole("button")).toHaveTextContent("Error");
    fireEvent.click(getByRole("button"));
    expect(getByText("An error occurred")).toBeInTheDocument();
    fireEvent.click(getByRole("button"));
    expect(queryByText("An error occurred")).toBe(null);
  });
});
