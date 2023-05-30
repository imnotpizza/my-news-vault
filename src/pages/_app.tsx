import Layout from '@/components/layout';
import type { AppProps } from 'next/app';
import '@/styles/reset.css';
import AppProviders from '@/components/providers/AppProviders';
import { UserInfoProvider } from '@/utils/userInfoProvider';
// TODO: AppProps 제네릭 추가
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProviders pageProps={pageProps}>
      <Component {...pageProps} />
    </AppProviders>
  );
}
