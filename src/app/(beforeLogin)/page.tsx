import { Metadata } from 'next';
import React from 'react';
import { createMetadataObj } from '../_lib/metadata';
import LandingPageTemplate from '@/components/templates/landing/LandingPageTemplate';

export default function MainPage() {
  return <LandingPageTemplate />;
}

/** 메타데이터 설정 */
export const metadata: Metadata = createMetadataObj();
