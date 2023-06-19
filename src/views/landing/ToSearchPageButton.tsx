import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100px;
  height: 30px;
`;

const ToSearchPageButton = () => {
  const router = useRouter();

  const onClick = () => {
    router.push('/search');
  };

  return <Button onClick={onClick} />;
};

export default ToSearchPageButton;
