import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Threshold = styled.div`
  position: absolute;
  bottom: 0;
  height: 10%;
  width: 100%;
`;

const InfiniteScrollWrapper = ({ children, onTriggered }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      onTriggered();
    }
  }, [inView, onTriggered]);

  return (
    <Container className='infinite-scroll-box'>
      {children}
      <Threshold ref={ref} />
    </Container>
  );
};

export default InfiniteScrollWrapper;
