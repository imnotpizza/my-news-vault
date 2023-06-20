import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  font-size: 28px;
`;

const LandingContents = ({ children }) => {
  return <Text>{children}</Text>;
};

export default LandingContents;
