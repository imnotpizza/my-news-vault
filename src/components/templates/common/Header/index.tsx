'use client';

import AppLogo from '@/components/atoms/AppLogo';
import LoginButton from '@/components/molecules/LoginButton';
import LogoutButton from '@/components/molecules/LogoutButton';
import ToScrapPageButton from '@/components/organisms/scrap/ToScrapPageButton';
import useAuth from '@/hooks/useAuth';
import React, { useContext } from 'react';
import LoginDialogTemplate from '../../search/LoginDialogTemplate';
// import AppLogo from '@/views/header/AppLogo';

const Header = () => {
  const { isLogined } = useAuth();
  return (
    <div className="w-full h-full mx-auto flex justify-between items-center bg-background">
      <div className="flex items-center justify-center">
        <AppLogo />
      </div>
      <div className="flex justify-end items-center">
        <div className="scrap-link flex justify-end items-center">
          <ToScrapPageButton />
        </div>
        {/* TODO: user profile 추가 */}
        <div className="login-logout ml-[2.5rem] md:ml-[1.25rem]">
          {isLogined ? <LogoutButton /> : <LoginDialogTemplate.OpenButton />}
        </div>
      </div>
    </div>
  );
};

export default Header;
