import { Metadata } from 'next';
import React from 'react';

export default function HomePage() {
  return <div>this is homepage</div>;
}

export const metadata: Metadata = {
  title: 'My News Vault',
  description: 'news scrap',
};
