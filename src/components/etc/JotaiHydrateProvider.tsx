'use client';

import { authAtom } from '@/hooks/useAuth';
import { queryAtom } from '@/queries/useBingNewsFetch';
import { TBingNewsFilterQueries, TUserInfo } from '@/types';
import { useHydrateAtoms } from 'jotai/utils';
import React from 'react';

interface IProps {
  children: React.ReactNode;
  prefetchedUserInfo: TUserInfo | null;
}

/**
 * useHydrateAtoms를 사용하여 server에서 불러온 유저정보 초기화
 */
export default function JotaiHydrateProvider({ prefetchedUserInfo, children }: IProps) {
  useHydrateAtoms([[authAtom, { userInfo: prefetchedUserInfo }]]);
  return children;
}
