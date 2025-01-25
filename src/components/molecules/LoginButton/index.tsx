import { Button } from '@/components/atoms/Button';
// import LoginButtonIcon from '@/assets/svgs/login-button-icon.svg';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {}

/**
 * 로그인 버튼, 버튼 클릭시 로그인 수행
 */
export default function LoginButton({ ...props }: IProps) {
  return (
    <Button variant="outline" {...props}>
      <div className="flex gap-2 items-center">
        {/* FIXME: svg 로드시 에러발생 */}
        {/* <LoginButtonIcon /> */}
        <span>로그인</span>
      </div>
    </Button>
  );
}
