import { Inter } from 'next/font/google';
import AppProviders from '@/components/providers/AppProviders';
import React from 'react';
import useScrappedNewsList from '@/queries/useScrappedNewsList';
import Category from '@/components/search/Category';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Category/>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
