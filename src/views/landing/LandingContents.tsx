import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  font-size: 30px;
`;

const LandingContents = ({ children }) => {
  return <Text>{children}</Text>;
};

export default LandingContents;
