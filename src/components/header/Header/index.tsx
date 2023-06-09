import React from 'react';
import styled from 'styled-components';
import AppLogo from '@/views/header/AppLogo';
import { userInfoContext } from '@/utils/userInfoProvider';
import LogoutButton from '@/views/loginStatus/LogoutButton';
import LoginButton from '@/views/loginStatus/LoginButton';
import UserProfile from '@/views/header/UserProfile';
import Link from 'next/link';

const MainContainer = styled.div`
  width: 100%;
  height: 72px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);
`;

const TopContainer = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  margin: 0 30px;

  .logo {
    display: flex;
    justify-content: center;
  }

  .user {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .user > .profile {
    margin-left: 1rem;
  }

  .user > .login-logout {
  }
`;

const Header = () => {
  const { isSignin, userInfo } = React.useContext(userInfoContext);
  return (
    <MainContainer>
      <TopContainer>
        <div className="logo">
          <AppLogo />
        </div>
        <div className="user">
          <Link
            href={{
              pathname: '/scrap',
            }}
          >
            scrap list
          </Link>
          <div className="login-logout-button">{isSignin ? <LogoutButton /> : <LoginButton />}</div>
          <div className="profile">
            {isSignin && <UserProfile src={userInfo?.photoURL} alt={userInfo?.displayName} />}
          </div>
        </div>
      </TopContainer>
    </MainContainer>
  );
};

export default Header;
