// 다음 문구 추가시, 해당 파일은 클라이언트 컴포넌트로 취급되어 ssr에 적용되지 않음

'use client';

import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from '@/styles/globalStyle';
import { queryClient } from '@/constants/defaultOptions';
import { ThemeProvider } from 'styled-components';
import Palette from '@/styles/palette';

const AppProviders = ({ children }: any) => {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <ThemeProvider theme={Palette}>{children}</ThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default AppProviders;
