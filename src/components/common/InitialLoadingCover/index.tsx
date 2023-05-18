'use client';

import React, { useEffect } from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: green;
`;

const LoadingSign = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background-color: blue;
`;

// 초반 로딩 페이지
const InitialLoadingCover = ({ children }) => {
  const [loaded, setLoaded] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  if (!loaded) {
    return (
      <Container>
        <LoadingSign />
      </Container>
    );
  } else {
    return children;
  }
};

export default InitialLoadingCover;
