import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Thumbnail = styled(Image)`
  width: 13.44rem;
  height: 8.63rem;
  border-radius: 6px;
  margin: 0px 8px;
`;

const NewsCardThumbnail = ({ src, alt }) => {
  return <Thumbnail width={215} height={138} src={src} alt={alt} />;
};

export default NewsCardThumbnail;
