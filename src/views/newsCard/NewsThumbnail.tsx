import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const ThumbnailImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 5px;
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
