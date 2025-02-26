'use client';

import { Button } from '@/components/atoms/Button';
import useAuth from '@/hooks/useAuth';
import { useSignout } from '@/queries/useUserAuth';
import { authAtom, userInfoContext } from '@/utils/userInfoProvider';
import { useAtom } from 'jotai';
import React, { useContext } from 'react';

export default function LogoutButton() {
  const { setUserInfo } = useAuth();
  const { mutate } = useSignout({
    onSettled: () => {
      setUserInfo(null);
    },
  });
  return (
    <Button
      onClick={() => {
        mutate();
      }}
    >
      로그아웃
    </Button>
  );
}
