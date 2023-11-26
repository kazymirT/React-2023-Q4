import "../styles/globals.css";
import type { AppProps } from "next/app";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

const { wrapper } = require("../components/Store/store");

Object.assign(globalThis, {
  fetch,
  Headers,
  Request,
  Response,
  AbortController,
});

export function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
export default wrapper.withRedux(App);
