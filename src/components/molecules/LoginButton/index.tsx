'use client';

import { Button } from '@/components/atoms/Button';
import useAuth from '@/hooks/useAuth';
import { useSignin } from '@/queries/useUserAuth';
// import LoginButtonIcon from '@/assets/svgs/login-button-icon.svg';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import GoogleIcon from '@/assets/google.svg';

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
    <Button
      variant="ghost"
      {...props}
      onClick={onClickSignin}
      className="relative flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow hover:shadow-md transition duration-150"
    >
      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-5 transition-opacity rounded-md pointer-events-none"></div>
      <div className="flex items-center space-x-3 relative z-10">
        <GoogleIcon className="w-5 h-5" />
        <span className="text-sm font-medium text-gray-700">Sign in with Google</span>
        <span className="sr-only">Sign in with Google</span>
      </div>
    </Button>
  );
}
