import React, { useCallback } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import ERRCODE from '@/constants/errCode';
import { userInfoContext } from '@/utils/userInfoProvider';
import { signinWithFirebaseAuth } from '@/api/auth';

const Button = styled.button`
  cursor: pointer;
  gap: 0.81rem;
  width: 6.13rem;
  height: 2.38rem;
  border: 0.06rem solid #1a2254;
  border-radius: 0.25rem;
  background: transparent;
`;

const LoginText = styled.p`
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  color: ${(p) => p.theme.Navy.Default};
`;

const LoginButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { setUserInfo } = React.useContext(userInfoContext);

  const onClickSignin = useCallback(async () => {
    try {
      const newUserInfo = await signinWithFirebaseAuth();
      if (!newUserInfo) {
        throw new Error(ERRCODE.USER_AUTH_FAILED);
      }
      setUserInfo(newUserInfo);
      window.location.href = '/';
    } catch (e) {
      alert('로그인 도중 문제가 발생하였습니다.');
    }
  }, [setUserInfo]);

  return (
    <Button {...props} onClick={onClickSignin} className="flex-center">
      <Image src="/svg/login-button-icon.svg" alt="로그인 버튼" width={12.5} height={12.5} />
      <LoginText>로그인</LoginText>
    </Button>
  );
};

export default LoginButton;
