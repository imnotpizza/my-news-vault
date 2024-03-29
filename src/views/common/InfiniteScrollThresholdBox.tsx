import React, { forwardRef } from 'react';
import styled from 'styled-components';
import BeatLoader from 'react-spinners/BeatLoader';
import Palette from '@/styles/palette';

const Box = styled.div`
  width: 100%;
  height: 5.25rem;
  position: absolute;
  bottom: 0;
  z-index: 0;
  padding-top: 2rem;
`;

const InfiniteScrollThresholdBox = ({ isLoading }, ref) => {
  return (
    <Box className="flex-center" ref={ref}>
      {isLoading && <BeatLoader size={14} color={Palette.Navy.Default} />}
    </Box>
  );
};

export default forwardRef(InfiniteScrollThresholdBox);
