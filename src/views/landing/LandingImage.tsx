import React from 'react';
import { styled } from 'styled-components';
import Image from 'next/image';

const ImageBox = styled.div`
  border: 7px solid black;
  border-radius: 1rem;
  width: 300px;
  height: 450px;
  & > img {
    border-radius: 0.5rem;
  }
`;

const LandingImage = ({ title, imgUrl }) => {
  return (
    <ImageBox>
      <Image width={300} height={450} alt={`이미지:${title}`} className="image" src={imgUrl} />
    </ImageBox>
  );
};

export default LandingImage;
