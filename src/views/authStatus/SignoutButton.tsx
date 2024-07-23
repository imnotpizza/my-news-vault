import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { responsive } from '@/styles/responsive';
import { userInfoContext } from '@/utils/userInfoProvider';
import { queryClient } from '@/queries/queryClient';
import { useSignout } from '@/queries/useUserAuth';
import DefaultSpinner from '../searchStatus/DefaultSpinner';
// add 5
const Button = styled.button<{ disabled: boolean }>`
  gap: 0.81rem;
  width: 6.13rem;
  height: 2.38rem;
  border: 0.06rem solid #1a2254;
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

const SignoutText = styled.p`
  font-weight: 700;
  font-size: 0.81rem;
  line-height: 1.19rem;
  color: ${(p) => p.theme.Navy.Default};
  ${responsive.mobile} {
    display: none;
  }
`;

const SignoutButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { setUserInfo } = React.useContext(userInfoContext);
  const { mutate, isLoading } = useSignout({
    onSuccess: () => {
      setUserInfo(() => null);
      queryClient.clear();
      window.location.href = '/';
    },
    onError: () => {
      alert('로그아웃 도중 문제가 발생하였습니다.');
    },
  });

  const onClickSignout = () => {
    mutate();
  };

  return (
    <Button {...props} onClick={onClickSignout} className="flex-center" disabled={isLoading}>
      {isLoading ? (
        <DefaultSpinner size={12.5} isLoading={isLoading} />
      ) : (
        <Image src="/svg/logout-button-icon.svg" alt="로그아웃 버튼" width={12.5} height={12.5} />
      )}
      <SignoutText>로그아웃</SignoutText>
    </Button>
  );
};

export default SignoutButton;
