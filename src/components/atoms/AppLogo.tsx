import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { responsive } from '@/styles/responsive';

const Logo = styled(Image)`
  ${responsive.mobile} {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const AppLogo = () => {
  return <Logo src="/img/applogo.png" alt="logo" width={70} height={70} />;
};

export default AppLogo;
