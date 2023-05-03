import React from "react";
import { Reset } from "styled-reset";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import GlobalStyle from "@/styles/globalStyle";
import { queryClient } from "@/constants/defaultOptions";
import { ThemeProvider } from "styled-components";
import Palette from "@/styles/palette";


const AppProviders = ({ children }: any) => {
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
