import startMsw from '@/msw/startMsw';
import React, { useEffect } from 'react';

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
