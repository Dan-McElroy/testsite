import React from "react";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import { client } from "../graphql/client";
import GlobalStyle from "../styled/global";
import { theme } from "../styled/theme";

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  </ThemeProvider>
);

export default App;
