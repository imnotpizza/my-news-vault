import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Thumbnail = styled(Image)`
  border-radius: 6px;
  margin: 0px 8px;
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
