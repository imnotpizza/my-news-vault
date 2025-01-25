import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { responsive } from '@/styles/responsive';

const Thumbnail = styled(Image)`
  border-radius: 0.38rem;
  margin: 0rem 0.5rem;

  ${responsive.mobile} {
    width: 5.13rem;
    height: 7.81rem;
    border-radius: 0.38rem;
    margin: 0rem 0.5rem;
  }
`;

const NewsCardThumbnail = ({ src, alt }) => {
  return (
    <Thumbnail
      width={231}
      height={138}
      src={src || '/img/newscard-default-thumbnail.png'}
      alt={alt}
    />
  );
};

export default NewsCardThumbnail;
