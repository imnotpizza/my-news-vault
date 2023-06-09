import React from 'react';
import SquareLoader from 'react-spinners/SquareLoader';
import Palette from '@/styles/palette';
import { styled } from 'styled-components';
import StatusUI from './StatusUI';

const DefaultLoadingUI = () => {
  return <StatusUI statusImage={<SquareLoader size={80} color={Palette.Navy.Default} />} />;
};

export default DefaultLoadingUI;
