import React from "react";
import { Reset } from "styled-reset";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalStyle from "@/styles/global";
import { queryDefaultOptions } from "@/constants/defaultOptions";
import { ThemeProvider } from "styled-components";
import Palette from "@/styles/palette";

const queryClient = new QueryClient();
queryClient.setDefaultOptions({
  queries: queryDefaultOptions,
});

const AppProviders = ({ children }) => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <ThemeProvider theme={Palette}>{children}</ThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default AppProviders;
