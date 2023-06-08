import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { responsive } from '@/styles/responsive';

const Thumbnail = styled(Image)`
  border-radius: 6px;
  margin: 0px 8px;
  width: 215px;
  height: 138px;

  ${responsive.mobile} {
    width: 82px;
    height: 125px;
    border-radius: 6px;
    margin: 0px 8px;
  }
`;

const NewsCardThumbnail = ({ src, alt }) => {
  return (
    <Thumbnail
      width={215}
      height={138}
      src={src || '/img/newscard-default-thumbnail.png'}
      alt={alt}
    />
  );
};

export default NewsCardThumbnail;
