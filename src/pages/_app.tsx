import type { AppProps } from 'next/app';
import '@/styles/reset.css';
import '@/styles/flex.css';
import AppProviders from '@/components/providers/AppProviders';
import { TPageProps } from '@/types';
import font from '@/styles/font';
import printVersion from '@/utils/printVersion';

// print version
printVersion();

export default function App({ Component, pageProps }: AppProps<TPageProps>) {
  return (
    <main className={font.className}>
      <AppProviders pageProps={pageProps}>
        <Component {...pageProps} />
      </AppProviders>
    </main>
  );
}
