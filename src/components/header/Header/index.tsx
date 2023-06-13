import React from 'react';
import styled from 'styled-components';
import AppLogo from '@/views/header/AppLogo';
import { userInfoContext } from '@/utils/userInfoProvider';
import LogoutButton from '@/views/authStatus/SignoutButton';
import LoginButton from '@/views/authStatus/SigninButton';
import UserProfile from '@/views/header/UserProfile';
import HeaderLinkItem from '@/views/header/HeaderLinkItem';
import { contentLayoutStyle, responsive } from '@/styles/responsive';

const MainContainer = styled.div`
  width: 100%;
  height: 4.5rem;
  background: ${(p) => p.theme.White};
  box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.07);
  ${responsive.mobile} {
    height: 3.13rem;
  }
`;

const TopContainer = styled.div`
  height: 4rem;
  margin: 0 auto;
  padding: 0 1.25rem;
  ${contentLayoutStyle};
  ${responsive.mobile} {
    height: 3.13rem;
  }
  .logo {
  }

  .scrap-link {
  }

  .user {
  }

  .user > .profile {
    margin-left: 0.63rem;
  }

  .user > .login-logout {
    margin-left: 2.5rem;
    ${responsive.mobile} {
      margin-left: 1.25rem;
    }
  }
`;

const Header = () => {
  const { isSignin, userInfo } = React.useContext(userInfoContext);
  return (
    <MainContainer>
      <TopContainer className="flex-row justify-space-between">
        <div className="logo flex-center">
          <AppLogo />
        </div>

        <div className="user flex-row justify-end align-center">
          <div className="scrap-link flex-row justify-end align-center">
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
