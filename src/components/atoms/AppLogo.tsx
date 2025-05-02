import React from 'react';
import Image from 'next/image';

const AppLogo = () => {
  return (
    <Image src="/img/applogo.png" alt="logo" width={60} height={60} className="w-16-h-16" />
  );
};

export default AppLogo;
