import { UserProvider } from '@/hooks/userProvider';
import Layout from '@/components/layout';
import { defaultQueryOptions } from '@/constants';
import GlobalStyles from '@/styles/GlobalStyles';
import Palette from '@/styles/Palette';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import '@/styles/reset.css';

const queryClient = new QueryClient();
queryClient.setDefaultOptions({
  queries: defaultQueryOptions,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeProvider theme={Palette}>
          <UserProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </UserProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
