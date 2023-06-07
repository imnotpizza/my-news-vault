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
`;

const LogoutText = styled.p`
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  color: #1a2254;
`;

const LogoutButton = () => {
  return (
    <Button>
      <div>login image</div>
      <LogoutText>로그아웃</LogoutText>
    </Button>
  );
};

export default LogoutButton;
