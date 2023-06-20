import { responsive } from '@/styles/responsive';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 300px;
  height: 60px;
  border-radius: 100px;
  cursor: pointer;
  border: none;
  font-size: 23px;
  ${responsive.mobile} {
    width: 150px;
    height: 50px;
    font-size: 16px;
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
