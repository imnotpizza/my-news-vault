import React from 'react';
import RootProviders from './_component/RootProviders';

/**
 * _app+_document 역할
 */
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
