import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const ThumbnailImage = styled(Image)`
  width: 3.13rem;
  height: 3.13rem;
  border-radius: 0.31rem;
`;

interface INewsThumbnailProps {
  src: string | undefined;
  alt?: string;
}

// TODO: default 이미지 추가
const NewsThumbnail = ({ src, alt = 'image' }: INewsThumbnailProps) => {
  const imageSrc = src || '/images/no-image.png';

  return <ThumbnailImage width={50} height={50} src={imageSrc} alt={alt} />;
};

export default NewsThumbnail;
