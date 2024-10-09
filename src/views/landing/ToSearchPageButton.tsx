import { responsive } from '@/styles/responsive';
import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 300px;
  height: 60px;
  border-radius: 100px;
  cursor: pointer;
  border: none;
  font-size: 23px;
  background-color: ${(p) => p.theme.Blue.Blue_L};
  ${responsive.mobile} {
    width: 150px;
    height: 50px;
    font-size: 16px;
  }
  &:hover {
    background-color: ${(p) => p.theme.Blue.Blue_M};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
    color: ${(p) => p.theme.White};
  }
`;

const ToSearchPageButton = () => {
  const router = useRouter();
  const onClick = () => {
    router.push('/search');
  };

  return <Button onClick={onClick}>지금 검색하기</Button>;
};

export default ToSearchPageButton;
