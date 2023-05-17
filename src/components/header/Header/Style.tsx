'use client';

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 50px;
  background-color: orange;
`;

const Style = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Style;
