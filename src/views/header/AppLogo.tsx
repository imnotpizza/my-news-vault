import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Logo = styled(Image)`
  margin-left: 20px;
  display: flex;
  justify-content: center;
`;

const AppLogo = () => {
  return <Logo src="/img/applogo.png" alt="logo" width={100} height={100} />;
};

export default AppLogo;
