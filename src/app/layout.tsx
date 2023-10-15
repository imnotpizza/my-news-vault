import AppProviders from '@/components/providers/AppProviders';
import React from 'react';
import Meta from '@/components/common/Meta';

const RootLayout = ({ children, pageProps }) => {
  return (
    <html lang="utf-8">
      <Meta />
      <body>
        <AppProviders pageProps={pageProps}>{children}</AppProviders>
      </body>
    </html>
  );
};

export default RootLayout;
