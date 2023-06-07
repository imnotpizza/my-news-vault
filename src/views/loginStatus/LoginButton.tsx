import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 98px;
  height: 38px;
  border: 1px solid #1a2254;
  border-radius: 4px;
  background: transparent;
`;

const LoginText = styled.p`
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  color: #1a2254;
`;

const LoginButton = () => {
  return (
    <Button>
      <LoginText>로그인</LoginText>
    </Button>
  );
};

export default LoginButton;
