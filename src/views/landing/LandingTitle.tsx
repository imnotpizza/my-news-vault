import React from 'react';
import { styled } from 'styled-components';

const Text = styled.p`
  font-size: 60px;
`;

const LandingTitle = ({ children }) => {
  return <Text>{children}</Text>;
};

export default LandingTitle;
