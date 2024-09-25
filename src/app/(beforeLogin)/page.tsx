import { Metadata, ResolvingMetadata } from 'next';
import React from 'react';
import { createMetadataObj } from '../_lib/metadata';

export default function HomePage() {
  return <div>this is homepage</div>;
}

export const metadata: Metadata = createMetadataObj();
