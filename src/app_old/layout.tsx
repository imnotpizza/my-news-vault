import { Inter } from 'next/font/google';
import AppProviders from '@/components/providers/AppProviders';
import React from 'react';
import Header from '@/components/header/Header';
import '../styles/reset.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          <>
            <Header />
            {children}
          </>
        </AppProviders>
        <div id="modal-root" />
      </body>
    </html>
  );
}
