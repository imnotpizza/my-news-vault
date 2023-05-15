// 다음 문구 추가시, 해당 파일은 클라이언트 컴포넌트로 취급되어 ssr 단계 건너뜀

'use client';

import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from '@/styles/globalStyle';
import { queryClient } from '@/queries/queryClient';
import { ThemeProvider } from 'styled-components';
import Palette from '@/styles/palette';
import { NewsQueryProvider } from '@/utils/newsQueryContext';
import { UserInfoProvider } from '@/utils/userInfoProvider';

const AppProviders = ({ children }: any) => {
  return (
    <>
      <GlobalStyle />
      <UserInfoProvider>
        <NewsQueryProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={true} />
            <ThemeProvider theme={Palette}>{children}</ThemeProvider>
          </QueryClientProvider>
        </NewsQueryProvider>
      </UserInfoProvider>
    </>
  );
};

export default AppProviders;
