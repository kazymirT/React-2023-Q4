import React from "react";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

import { Search } from "@/components/Search/Search";

vi.mock("next/router", () => vi.importActual("next-router-mock"));

describe("Tests for the Search component", () => {
  it("Clicking the Search button saves the entered value to the local storage", async () => {
    mockRouter.push("/");
    const { getByTestId } = render(<Search />, {
      wrapper: MemoryRouterProvider,
    });
    expect(localStorage.getItem("search")).toBe(null);
    fireEvent.change(getByTestId("search-input"), {
      target: { value: "phone" },
    });
    fireEvent.submit(getByTestId("search-form"));

    expect(mockRouter.asPath).toBe("/?search=phone&page=1");
    expect(localStorage.getItem("search")).toBe("phone");

    fireEvent.change(getByTestId("search-input"), {
      target: { value: "watch" },
    });
    fireEvent.submit(getByTestId("search-form"));

    expect(mockRouter.asPath).toBe("/?search=watch&page=1");
    expect(localStorage.getItem("search")).toBe("watch");
  });

  it("The component retrieves the value from the local storage upon mounting.", async () => {
    const localStorageValue = localStorage.getItem("search");
    expect(localStorageValue).toBe("watch");
    mockRouter.push(`/?search=${localStorageValue}`);
    const { getByTestId } = render(<Search />, {
      wrapper: MemoryRouterProvider,
    });

    expect(getByTestId("search-input")).toHaveValue(localStorageValue);
  });
});
