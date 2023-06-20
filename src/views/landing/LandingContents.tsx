import { responsive } from '@/styles/responsive';
import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  color: ${(p) => p.theme.Blue.Blue_M};
  font-size: 28px;
  line-height: 46px;
  ${responsive.mobile}{
    line-height: 26px;
    font-size: 16px;
  }
`;

const LandingContents = ({ children }) => {
  return <Text>{children}</Text>;
};

export default LandingContents;
