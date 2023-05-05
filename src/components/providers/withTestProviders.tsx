/* eslint-disable react/display-name */
import { queryClient } from '@/constants/defaultOptions';
import Palette from '@/styles/palette';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const withTestProviders = () => (WrappedComponent: React.FC) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Palette}>
        <WrappedComponent />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default withTestProviders();
