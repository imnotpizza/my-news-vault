import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const ProviderLogo = styled(Image)`
  margin-right: 0.5rem;
`;

const NewsCardProvider = ({ src, alt }) => {
  return <ProviderLogo src={src || '/svg/newscard-default-providerlogo.svg'} alt={alt} width={25} height={25} />;
};

export default NewsCardProvider;
