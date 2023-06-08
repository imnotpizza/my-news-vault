import type { AppProps } from 'next/app';
import '@/styles/reset.css';
import AppProviders from '@/components/providers/AppProviders';
import { TPageProps } from '@/types';
import font from '@/styles/font';

// TODO: AppProps 제네릭 추가
export default function App({ Component, pageProps }: AppProps<TPageProps>) {
  return (
    <main className={font.className}>
      <AppProviders pageProps={pageProps}>
        <Component {...pageProps} />
      </AppProviders>
    </main>
  );
}
