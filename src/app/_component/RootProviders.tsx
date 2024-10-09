'use client';

import React from 'react';
import '@/styles/reset.css';
import '@/styles/flex.css';
import { queryClient } from '@/queries/queryClient';
import { ThemeProvider } from 'styled-components';
import Palette from '@/styles/palette';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function RootProviders({ children }) {
  return (
    <div>
      <p>providers</p>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={Palette}>{children}</ThemeProvider>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </div>
  );
}
