import Layout from '@/components/layout';
import type { AppProps } from 'next/app';
import '@/styles/reset.css';
import AppProviders from '@/components/providers/AppProviders';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProviders>
  );
}
