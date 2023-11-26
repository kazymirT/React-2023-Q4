import { afterEach, describe, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../Store/store";
import { setIsDetailsLoading } from "../../Slice/isLoadingSlice";
import { MemoryRouter } from "react-router-dom";
import { Results } from "./Results";

describe("Loading indicator is displayed while fetching data", () => {
  afterEach(() => cleanup());
  it("Shows loading indicator", async () => {
    screen.debug();
    store.dispatch(setIsDetailsLoading(true));
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Results />
        </Provider>
      </MemoryRouter>,
    );

    await screen.findByTestId("loader-main");
  });
});
