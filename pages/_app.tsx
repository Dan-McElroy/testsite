import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styled/global";
import { theme } from "../styled/theme";

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
