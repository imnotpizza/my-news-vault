import React, { useContext } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { responsive } from '@/styles/responsive';
import { userInfoContext } from '@/utils/userInfoProvider';
import { useSignin } from '@/queries/useUserAuth';
import DefaultSpinner from '../searchStatus/DefaultSpinner';

const Button = styled.button<{ disabled: boolean }>`
  gap: 0.81rem;
  width: 6.13rem;
  height: 2.38rem;
  border: 0.06rem solid ${(p) => p.theme.Navy.Default};
  border-radius: 0.25rem;
  background: transparent;
  opacity: ${(p) => (p.disabled ? 0.5 : 1)};
  cursor: ${(p) => (p.disabled ? 'default' : 'pointer')};
  &:hover {
    background-color: ${(p) => p.theme.Blue.Blue_L};
    border: 0.06rem solid ${(p) => p.theme.Blue.Default};
  }
  ${responsive.mobile} {
    width: 1.82rem;
    height: 1.82rem;
  }
`;

const SigninText = styled.p`
  font-weight: 700;
  font-size: 0.81rem;
  line-height: 1.19rem;
  color: ${(p) => p.theme.Navy.Default};
  ${responsive.mobile} {
    display: none;
  }
`;

const SigninButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { setUserInfo } = useContext(userInfoContext);
  // @ts-ignore
  const { mutate, isLoading } = useSignin({
    onSuccess: (newUserInfo) => {
      setUserInfo(() => newUserInfo);
      window.location.reload();
    },
  });

  const onClickSignin = () => {
    mutate();
  };

  return (
    <Button {...props} onClick={onClickSignin} className="flex-center" disabled={isLoading}>
      {isLoading ? (
        <DefaultSpinner size={12.5} isLoading={isLoading} />
      ) : (
        <Image src="/svg/login-button-icon.svg" alt="로그인 버튼" width={12.5} height={12.5} />
      )}
      <SigninText>로그인</SigninText>
    </Button>
  );
};

export default SigninButton;
