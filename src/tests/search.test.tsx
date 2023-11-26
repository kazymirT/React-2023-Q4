import React from "react";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import { Search } from "@/components/Search/Search";

vi.mock("next/router", () => vi.importActual("next-router-mock"));

describe("Tests for the Search component", () => {
  it("Clicking the Search button saves the entered value to the local storage", async () => {
    mockRouter.push("/");
    render(<Search />, {
      wrapper: MemoryRouterProvider,
    });
    expect(localStorage.getItem("search")).toBe(null);
    fireEvent.change(screen.getByTestId("search-input"), {
      target: { value: "phone" },
    });
    fireEvent.submit(screen.getByTestId("search-form"));

    expect(mockRouter.asPath).toBe("/?search=phone&page=1");
    expect(localStorage.getItem("search")).toBe("phone");

    fireEvent.change(screen.getByTestId("search-input"), {
      target: { value: "watch" },
    });
    fireEvent.submit(screen.getByTestId("search-form"));
    expect(screen.getByTestId("search-form")).toMatchSnapshot();

    expect(mockRouter.asPath).toBe("/?search=watch&page=1");
    expect(localStorage.getItem("search")).toBe("watch");
  });

  it("The component retrieves the value from the local storage upon mounting.", async () => {
    const localStorageValue = localStorage.getItem("search");
    expect(localStorageValue).toBe("watch");
    mockRouter.push(`/?search=${localStorageValue}`);
    render(<Search />, {
      wrapper: MemoryRouterProvider,
    });

    expect(screen.getByTestId("search-form")).toMatchSnapshot();
    expect(screen.getByTestId("search-input")).toHaveValue(localStorageValue);
  });
});
