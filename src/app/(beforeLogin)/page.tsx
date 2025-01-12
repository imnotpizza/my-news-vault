import { Metadata } from 'next';
import React from 'react';
import { createMetadataObj } from '../_lib/metadata';
import HomePage from './_component/HomePage';
import { Button } from '@/components/atoms/Button';
import { toast } from '@/hooks/useToast';
import Card from '@/components/atoms/CardUI';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/atoms/SelectBox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/atoms/Dialog';
import UITest from '@/components/templates/UITest';

//  <HomePage />

export default function MainPage() {
  return <UITest />;
}

/** 메타데이터 설정 */
export const metadata: Metadata = createMetadataObj();
