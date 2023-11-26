import React from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { createCardsListResponseMock } from "./_mocks";
import { Results } from "@/components/Results/Results";

vi.mock("next/router", () => vi.importActual("next-router-mock"));

describe("Tests for the Card List component", () => {
  it("Component renders the specified number of cards - 3", async () => {
    const searchResults = render(
      <Results data={createCardsListResponseMock(true)} />,
    );
    expect(searchResults.baseElement).toMatchSnapshot();
    expect(await screen.findAllByText(/iPhone 9/)).toHaveLength(3);
  });

  it("An appropriate message is displayed if no cards are present", async () => {
    const searchResults = render(
      <Results data={createCardsListResponseMock(false)} />,
    );

    expect(searchResults.baseElement).toMatchSnapshot();
    expect(screen.queryByText("Nothing foundddddddddddd:(")).toBeFalsy();
    expect(
      screen.getByText("The search returned no results, please try again."),
    ).toBeTruthy();
    expect(screen.queryByText(/testCard/)).toBeFalsy();
  });
});
