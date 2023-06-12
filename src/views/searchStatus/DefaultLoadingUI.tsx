import React from 'react';
import HashLoader from 'react-spinners/HashLoader';
import Palette from '@/styles/palette';

const DefaultLoadingUI = () => {
  return <HashLoader size={80} color={Palette.Blue.Blue_M} />;
};

export default DefaultLoadingUI;
