import Palette from '@/styles/palette';
import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const DefaultSpinner = ({ size, isLoading }: { size: number; isLoading: boolean }) => {
  return <ClipLoader size={size} color={Palette.Blue.Blue_M} loading={isLoading} />;
};

export default DefaultSpinner;
