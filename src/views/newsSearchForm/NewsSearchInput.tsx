import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 443px;
  padding-left: 15px;
  border: 0;
  border-radius: 4px;
  font-weight: 350;
  font-size: 13px;
  line-height: 19px;
  color: ${(p) => p.theme.Navy.Default};;
`;

const NewsSearchInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <Input {...props} />;
};

export default NewsSearchInput;
