import RootProviders from '@/components/etc/RootProviders';
import React from 'react';

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
