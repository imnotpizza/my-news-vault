'use client';

import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider, Hydrate } from '@tanstack/react-query';
import GlobalStyle from '@/styles/globalStyle';
import { queryClient } from '@/queries/queryClient';
import { ThemeProvider } from 'styled-components';
import Palette from '@/styles/palette';
import { AppProps } from 'next/app';

interface IAppProvidersProps {
  children: React.ReactNode;
  pageProps: AppProps['pageProps'];
}

const AppProviders = ({ children, pageProps }: IAppProvidersProps) => {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps}>
          <ReactQueryDevtools initialIsOpen={true} />
          <ThemeProvider theme={Palette}>{children}</ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
};

export default AppProviders;
