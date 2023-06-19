import React from 'react';
import { styled } from 'styled-components';
import Image from 'next/image';

const LandingImage = ({ title, imgUrl }) => {
  return <Image alt={`이미지:${title}`} className="image" src={imgUrl} />;
};

export default LandingImage;
