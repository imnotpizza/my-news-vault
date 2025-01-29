'use client';

import React, { useEffect } from 'react';
import '@/styles/reset.css';
import '@/styles/twinit.css';
import { queryClient } from '@/queries/queryClient';
import { ThemeProvider } from 'styled-components';
import Palette from '@/styles/palette';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastProvider } from '@/components/ui/toast';
import { Toaster } from '@/components/ui/toaster';

/**
 * msw 실행
 */
async function startMsw() {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    const worker = await import('../../../mocks/browser').then((res) => res.default);
    worker.start({
      // onUnhandledRequest: 'bypass',
    });
  } else {
    // const server = await import('../../../mocks/server').then((res) => res.default);
    // server.listen();
  }
}

/**
 * Root Layout 컴포넌트
 * 전역 provider, style 등등 _app에서 사용되는 건 여기에
 */
export default function RootProviders({ children }) {
  useEffect(() => {
    // if (process.env.NODE_ENV === 'development') {
    //   startMsw();
    // }
  }, []);

  return (
    <ToastProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={Palette}>{children}</ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      <Toaster />
    </ToastProvider>
  );
}
