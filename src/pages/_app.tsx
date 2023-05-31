import type { AppProps } from 'next/app';
import '@/styles/reset.css';
import AppProviders from '@/components/providers/AppProviders';
import { TPageProps } from '@/types';

// TODO: AppProps 제네릭 추가
export default function App({ Component, pageProps }: AppProps<TPageProps>) {
  return (
    <AppProviders pageProps={pageProps}>
      <Component {...pageProps} />
    </AppProviders>
  );
}
