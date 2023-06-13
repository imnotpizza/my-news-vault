import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 27.69rem;
  padding-left: 0.94rem;
  border: 0;
  border-radius: 0.25rem;
  font-weight: 350;
  font-size: 0.81rem;
  line-height: 1.19rem;
  color: ${(p) => p.theme.Navy.Default};
`;

const NewsSearchInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <Input {...props} />;
};

export default NewsSearchInput;
