import React from "react";
import { instanceOf } from "prop-types";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

export default App;

App.propTypes = {
  Component: instanceOf(Object).isRequired,
  pageProps: instanceOf(Object).isRequired
};
