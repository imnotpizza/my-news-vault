// 컴포넌트에 이름 안붙어 lint error발생, hoc 구조때문에 여기만 비활성화
/* eslint-disable react/display-name */
import { queryClient } from '@/queries/queryClient';
import { ToastProvider } from '@radix-ui/react-toast';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Toaster } from '../atoms/Toast';
import '@/styles/reset.css';
import '@/styles/twinit.css';

const TestProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ToastProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <Toaster />
    </ToastProvider>
  );
};

/**
 * hook test용 wrapper
 * @example
 * renderHook(() => useHook(), { wrapper: testWrapper })
 * */
export const testWrapper = ({ children }: { children: React.ReactNode }) => (
  <TestProviders>{children}</TestProviders>
);

export default TestProviders;
