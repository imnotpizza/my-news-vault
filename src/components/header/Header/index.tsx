import React from 'react';
import styled from 'styled-components';
import AppLogo from '@/views/header/AppLogo';
import { userInfoContext } from '@/utils/userInfoProvider';
import LogoutButton from '@/views/loginStatus/LogoutButton';
import LoginButton from '@/views/loginStatus/LoginButton';
import UserProfile from '@/views/header/UserProfile';
import HeaderLinkItem from '@/views/header/HeaderLinkItem';
import { contentLayoutStyle } from '@/styles/responsive';

const MainContainer = styled.div`
  width: 100%;
  height: 72px;
  background: ${(p) => p.theme.White};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);
`;

const TopContainer = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 20px;
  ${contentLayoutStyle};
  .logo {
    display: flex;
    justify-content: center;
  }

  .scrap-link {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .user {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .user > .profile {
    margin-left: 10px;
  }

  .user > .login-logout {
    margin-left: 40px;
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
          <div className="scrap-link">
            <HeaderLinkItem href="/scrap">스크랩 목록</HeaderLinkItem>
          </div>
          <div className="login-logout">{isSignin ? <LogoutButton /> : <LoginButton />}</div>
          <div className="profile">
            {isSignin && <UserProfile src={userInfo?.photoURL} alt={userInfo?.displayName} />}
          </div>
        </div>
      </TopContainer>
    </MainContainer>
  );
};

export default Header;
