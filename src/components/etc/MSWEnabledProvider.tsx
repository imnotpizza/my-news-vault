import React, { useEffect } from 'react';

/**
 * msw 실행
 */
async function startMsw() {
  if (process.env.NODE_ENV === 'production') return;
  if (typeof window !== 'undefined') {
    const worker = await import('../../../mocks/browser').then((res) => res.default);
    await worker.start({
      onUnhandledRequest: 'warn',
    });
  } else {
    const server = await import('../../../mocks/server').then((res) => res.default);
    server.listen();
  }
}

/**
 * MSW 초기화 담당 provider
 */
export default function MSWEnabledProvider({ enabled, children }) {
  const [mswReady, setMswReady] = React.useState(false);
  useEffect(() => {
    if (enabled) {
      (async () => {
        await startMsw();
        setMswReady(true);
      })();
    } else {
      setMswReady(true);
    }
  }, [enabled]);

  if (mswReady) {
    return <>{children}</>;
  } else {
    return null;
  }
}
