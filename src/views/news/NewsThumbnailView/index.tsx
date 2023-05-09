import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const ThumbnailImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 5px;
`;

interface INewsThumbnailViewProps {
  src: string | undefined;
  alt?: string;
}

const NewsThumbnailView = ({ src, alt }: INewsThumbnailViewProps) => {
  // 없으면 디폴트이미지로 설정
  const imageSrc = src ? src : '/images/no-image.png';

  return <ThumbnailImage width={50} height={50} src={imageSrc} alt={alt} />;
};

export default NewsThumbnailView;
