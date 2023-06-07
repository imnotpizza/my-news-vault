import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const ProviderLogo = styled(Image)`
  height: 14px;
  margin-top: 24px;
`;

const NewsCardProvider = ({ src, alt }) => {
  return <ProviderLogo src={src} alt={alt} width={14} height={14} />;
};

export default NewsCardProvider;
