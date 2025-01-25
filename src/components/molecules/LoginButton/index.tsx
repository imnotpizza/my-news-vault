import { Button } from '@/components/atoms/Button';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {}

/**
 * 로그인 버튼, 버튼 클릭시 로그인 수행
 */
export default function LoginButton({ ...props }: IProps) {
  return (
    <Button {...props}>
      <div>
        {/* icon */}
        <span>로그인F</span>
      </div>
    </Button>
  );
}
