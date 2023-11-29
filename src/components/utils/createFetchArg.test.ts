import { expect } from "vitest";

import { createFetchArg } from "./createFetchArg";

describe("createFetchArg", () => {
  it("should return a FetchArgType with the correct values when the arguments are strings", () => {
    const fetchArg = createFetchArg("iPhone 9", "10", "2");
    expect(fetchArg).toEqual({
      name: "iPhone 9",
      limit: "10",
      page: "10",
    });
  });

  it("should return a FetchArgType with the correct values when the arguments are string arrays", () => {
    const fetchArg = createFetchArg(
      ["iPhone 9", "iPhone 10"],
      ["5", "10"],
      ["2", "3"],
    );
    expect(fetchArg).toEqual({
      name: " ",
      limit: "5",
      page: "0",
    });
  });

  it("should return a FetchArgType with the correct values when the arguments are undefined", () => {
    const fetchArg = createFetchArg(undefined, undefined, undefined);
    expect(fetchArg).toEqual({
      name: " ",
      limit: "5",
      page: "0",
    });
  });
});
