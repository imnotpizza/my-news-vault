import React, { useEffect } from 'react';

/**
 * msw 실행
 */
async function startMsw() {
  if (process.env.NODE_ENV === 'production') return;
  if (typeof window !== 'undefined') {
    const worker = await import('../../../mocks/browser').then((res) => res.default);
    worker.start({
      // onUnhandledRequest: 'bypass',
    });
  } else {
    const server = await import('../../../mocks/server').then((res) => res.default);
    server.listen();
  }
}

/**
 * MSW mocking 실패용 임시추가
 * - 최초실행시 mocking되지 않는문제 임시 해결용 delay 추가
 * - 해결후 제거예정
 * - FIXME: 해결되면 이 컴포넌트 제거할 것
 */
export default function MSWEnabledProvider({ enabled, children }) {
  const [mswReady, setMswReady] = React.useState(false);
  useEffect(() => {
    if (enabled) {
      (async () => {
        await startMsw();
        setTimeout(() => {
          setMswReady(true);
        }, 10);
      })();
    }
  }, [enabled]);

  if (mswReady) {
    return <>{children}</>;
  } else {
    return null;
  }
}
