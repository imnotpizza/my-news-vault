'use client';

import LoginButton from '@/components/molecules/LoginButton';
import AppLogo from '@/views/header/AppLogo';
import ToScrapPageButton from '@/views/header/ToScrapPageButton';
import React from 'react';
// import AppLogo from '@/views/header/AppLogo';

const Header = () => {
  return (
    <div className="w-full h-full mx-auto flex justify-between items-center md:h-[3.13rem]">
      <div className="flex items-center justify-center">
        <AppLogo />
      </div>
      <div className="flex justify-end items-center">
        <div className="scrap-link flex justify-end items-center">
          <ToScrapPageButton />
        </div>
        <div className="login-logout ml-[2.5rem] md:ml-[1.25rem]">
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
