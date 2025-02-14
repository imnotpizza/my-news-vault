'use client';

import { Button } from '@/components/atoms/Button';
import useAuth from '@/hooks/useAuth';
import { useSignin } from '@/queries/useUserAuth';
// import LoginButtonIcon from '@/assets/svgs/login-button-icon.svg';
import { authAtom, userInfoContext } from '@/utils/userInfoProvider';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {}

/**
 * 로그인 버튼, 버튼 클릭시 로그인 수행
 */
export default function LoginButton({ ...props }: IProps) {
  const { refresh } = useRouter();
  const { setUserInfo } = useAuth();
  const { mutate } = useSignin({
    onSettled: (newUserInfo) => {
      console.log('newUserInfo', newUserInfo);
      setUserInfo({ ...newUserInfo });
      // refresh();
    },
  });

  const onClickSignin = () => {
    mutate();
  };

  return (
    <Button variant="outline" {...props} onClick={onClickSignin}>
      <div className="flex gap-2 items-center">
        {/* FIXME: svg 로드시 에러발생 */}
        {/* <LoginButtonIcon /> */}
        <span>로그인</span>
      </div>
    </Button>
  );
}
