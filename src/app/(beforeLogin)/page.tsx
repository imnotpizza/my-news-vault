import { Metadata } from 'next';
import React from 'react';
import { createMetadataObj } from '../_lib/metadata';
import HomePage from './_component/HomePage';
import { Button } from '@/components/atoms/Button';

//  <HomePage />

export default function MainPage() {
  return <div>
    <Button>hello</Button>
    
  </div>;
}

/** 메타데이터 설정 */
export const metadata: Metadata = createMetadataObj();
