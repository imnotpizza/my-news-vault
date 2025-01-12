import { Metadata } from 'next';
import React from 'react';
import { createMetadataObj } from '../_lib/metadata';
import UITest from '@/components/templates/UITest';

//  <HomePage />

export default function MainPage() {
  return <UITest />;
}

/** 메타데이터 설정 */
export const metadata: Metadata = createMetadataObj();
