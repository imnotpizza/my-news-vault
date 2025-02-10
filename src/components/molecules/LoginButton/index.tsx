'use client';

import { Button } from '@/components/atoms/Button';
import { useSignin } from '@/queries/useUserAuth';
// import LoginButtonIcon from '@/assets/svgs/login-button-icon.svg';
import { userInfoContext } from '@/utils/userInfoProvider';
import React, { useContext } from 'react';

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {}

/**
 * 로그인 버튼, 버튼 클릭시 로그인 수행
 */
export default function LoginButton({ ...props }: IProps) {
  const { setUserInfo } = useContext(userInfoContext);
  const { mutate } = useSignin({
    onSuccess: (newUserInfo) => {
      setUserInfo(() => newUserInfo);
      window.location.reload();
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
