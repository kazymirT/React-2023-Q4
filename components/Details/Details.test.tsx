import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Details } from "./Details";
import { store } from "../../Store/store";
import { setIsDetailsLoading } from "../../Slice/isLoadingSlice";
import { MemoryRouter } from "react-router-dom";

describe("Loading indicator is displayed while fetching data", () => {
  afterEach(() => cleanup());
  it("Shows loading indicator", async () => {
    screen.debug();
    store.dispatch(setIsDetailsLoading(true));
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Details />
        </Provider>
      </MemoryRouter>,
    );

    await screen.findByTestId("loader-details");
    const a = screen.findByTestId("details-cancel");
    expect(a).toBeTruthy();
  });
});
