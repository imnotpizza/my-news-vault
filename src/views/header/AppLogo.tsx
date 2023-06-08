import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Logo = styled(Image)`
  display: flex;
  justify-content: center;
`;

const AppLogo = () => {
  return <Logo src="/img/applogo.png" alt="logo" width={70} height={70} />;
};

export default AppLogo;
