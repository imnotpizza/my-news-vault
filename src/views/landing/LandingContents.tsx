import { responsive } from '@/styles/responsive';
import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  font-size: 28px;
  ${responsive.mobile}{
    font-size: 16px;
  }
`;

const LandingContents = ({ children }) => {
  return <Text>{children}</Text>;
};

export default LandingContents;
