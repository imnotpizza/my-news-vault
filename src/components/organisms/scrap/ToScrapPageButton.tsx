import { responsive } from '@/styles/responsive';
import { userInfoContext } from '@/utils/userInfoProvider';
import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

const LinkItem = styled.button`
  font-weight: 500;
  font-size: 1.06rem;
  line-height: 1.56rem;
  color: ${(p) => p.theme.Navy.Default};
  text-decoration: none;
  background: none;
  border: none;
  cursor:pointer;

  &:hover {
    text-decoration: underline;
  }

  ${responsive.mobile} {
    font-size: 0.88rem;
  }
`;

const ToScrapPageButton = () => {
  const { isSignin } = React.useContext(userInfoContext);
  const router = useRouter();
  const onClick = () => {
    if (!isSignin) {
      alert('스크랩 기능은 로그인 후 사용해주세요.');
      return;
    }
    router.push('/scrap');
  };
  return <LinkItem onClick={onClick}>스크랩 목록</LinkItem>;
};

export default ToScrapPageButton;
