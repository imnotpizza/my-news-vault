import React from 'react';
import { styled } from 'styled-components';

const Text = styled.p`
  position: absolute;
  bottom: -1.67rem;
  left: 0rem;
  font-size: 0.8rem;
  color: ${(p) => p.theme.Error.Default};
`;

const AlertText = ({ show = false, children }) => {
  if (show) {
    return <Text>{children}</Text>;
  } else {
    return null;
  }
};

export default AlertText;
