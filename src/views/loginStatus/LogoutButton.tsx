import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { signout } from '@/firebase';
import { userInfoContext } from '@/utils/userInfoProvider';
import { useRouter } from 'next/navigation';

const Button = styled.button`
  cursor: pointer;
  gap: 0.81rem;
  width: 6.13rem;
  height: 2.38rem;
  border: 0.06rem solid #1a2254;
  border-radius: 0.25rem;
  background: transparent;
`;

const LogoutText = styled.p`
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  color: ${(p) => p.theme.Navy.Default};
`;

const LogoutButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { setUserInfo } = React.useContext(userInfoContext);
  const router = useRouter();

  const onClickSignout = async () => {
    try {
      await signout();
      setUserInfo(null);
      router.push('/');
    } catch (e) {
      alert('로그아웃 도중 문제가 발생하였습니다.');
    }
  };

  return (
    <Button {...props} onClick={onClickSignout} className='flex-center'>
      <Image src="/svg/logout-button-icon.svg" alt="로그아웃 버튼" width={12.5} height={12.5} />
      <LogoutText>로그아웃</LogoutText>
    </Button>
  );
};

export default LogoutButton;
