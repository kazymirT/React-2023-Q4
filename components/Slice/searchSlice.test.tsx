import { describe, test, expect } from "vitest";
import {
  getInitialSearchValue,
  searchValueSlice,
  setSearchValue,
} from "./searchSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { searchValue: searchValueSlice.reducer },
});

describe("searchSlice", () => {
  test("setSearchValue action creator", () => {
    expect(setSearchValue("test123")).toStrictEqual({
      payload: "test123",
      type: "searchValue/setSearchValue",
    });
  });

  test("setSearchValue action updates searchValue in the state", () => {
    const searchValue = "test123";
    store.dispatch(setSearchValue(searchValue));

    const updatedState = store.getState().searchValue;

    expect(updatedState.searchValue).toBe(searchValue);
  });

  test("initial searchValue is set correctly", () => {
    store.dispatch(setSearchValue(" "));
    const updatedState = store.getState().searchValue;
    expect(updatedState.searchValue).toBe(getInitialSearchValue());
  });

  test("setSearchValue updates and reads searchValue correctly", () => {
    const store = configureStore({
      reducer: { searchValue: searchValueSlice.reducer },
    });
    const newSearchValue = "test123";
    store.dispatch(setSearchValue(newSearchValue));

    const state = store.getState();
    const readSearchValue = state.searchValue.searchValue;

    expect(readSearchValue).toBe(newSearchValue);
  });
});

describe("getInitialSearchValue", () => {
  test("should return empty string when location.search is empty", () => {
    Object.defineProperty(window, "location", {
      value: { search: "" },
      writable: true,
    });

    const result = getInitialSearchValue();

    expect(result).toBe(" ");
  });

  test("should return search parameter from location.search", () => {
    Object.defineProperty(window, "location", {
      value: { search: "?search=test" },
      writable: true,
    });

    const result = getInitialSearchValue();

    expect(result).toBe("test");
  });
});
