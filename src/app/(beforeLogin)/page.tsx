import { Metadata } from 'next';
import React from 'react';
import MSWTest from '@/components/etc/MSWTest';
import { createMetadataObj } from '../_lib/metadata';

//  <HomePage />

export default function MainPage() {
  return <MSWTest />;
}

/** 메타데이터 설정 */
export const metadata: Metadata = createMetadataObj();
