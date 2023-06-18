// 컴포넌트에 이름 안붙어 lint error발생, hoc 구조때문에 여기만 비활성화
/* eslint-disable react/display-name */
import { queryClient } from '@/queries/queryClient';
import Palette from '@/styles/palette';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const withTestProviders = () => (WrappedComponent: React.FC, props?: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Palette}>
        <WrappedComponent {...props} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default withTestProviders();
