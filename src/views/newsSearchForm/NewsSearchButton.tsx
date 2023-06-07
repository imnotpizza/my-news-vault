import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
`;

const NewsSearchButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Button {...props}>click</Button>;
};

export default NewsSearchButton;
