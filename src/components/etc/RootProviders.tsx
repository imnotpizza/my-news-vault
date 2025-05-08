'use client';

import React, { useEffect } from 'react';
import '@/styles/reset.css';
import '@/styles/twinit.css';
import { queryClient } from '@/queries/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastProvider, Toaster } from '@/components/atoms/Toast';
import MSWEnabledProvider from './MSWEnabledProvider';

const mswEnabled = process.env.NEXT_PUBLIC_MSW_ENABLED === 'true';

/**
 * Root Layout 컴포넌트
 * 전역 provider, style 등등 _app에서 사용되는 건 여기에
 */
export default function RootProviders({ children }) {
  return (
    <MSWEnabledProvider enabled={mswEnabled}>
      <ToastProvider>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        <Toaster />
      </ToastProvider>
    </MSWEnabledProvider>
  );
}
