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
