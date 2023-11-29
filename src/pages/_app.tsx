import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

const { wrapper } = require("../components/Store/store");

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Component {...props.pageProps} />
      </Provider>
    </ErrorBoundary>
  );
}
