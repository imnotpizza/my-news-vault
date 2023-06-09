import React, { forwardRef } from 'react';
import styled from 'styled-components';
import BeatLoader from 'react-spinners/BeatLoader';
import Palette from '@/styles/palette';

const Box = styled.div`
  width: 100%;
  height: 100px;
  background-color: red;
  position: absolute;
  bottom: -70px;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfiniteScrollThresholdBox = ({ isLoading }, ref) => {
  return <Box ref={ref}>{isLoading && <BeatLoader size={23} color={Palette.Navy.Default} />}</Box>;
};

export default forwardRef(InfiniteScrollThresholdBox);
