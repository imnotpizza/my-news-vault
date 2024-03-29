import { responsive } from '@/styles/responsive';
import React from 'react';
import { styled } from 'styled-components';

const Text = styled.p`
  color: ${(p) => p.theme.Navy.Navy_80};
  font-size: 56px;
  ${responsive.mobile}{
    font-size: 28px;
  }
`;

const LandingTitle = ({ children }) => {
  return <Text>{children}</Text>;
};

export default LandingTitle;
