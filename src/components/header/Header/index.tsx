import React from 'react';
import styled from 'styled-components';
import AppLogo from '@/views/header/AppLogo';
import { userInfoContext } from '@/utils/userInfoProvider';
import LogoutButton from '@/views/loginStatus/LogoutButton';
import LoginButton from '@/views/loginStatus/LoginButton';
import UserProfile from '@/views/header/UserProfile';

const MainContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 168px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);
`;

const TopContainer = styled.div`
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > .logo {
    cursor: pointer;
    width: 100px;
    margin-left: 20px;
    display: flex;
    justify-content: center;
  }

  & > .user {
    width: 155px;
    margin-right: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
`;

const Header = () => {
  const { isSignin } = React.useContext(userInfoContext);
  return (
    <MainContainer>
      <TopContainer>
        <div className="logo">
          <AppLogo />
        </div>
        <div className="user">
          <div>
            <UserProfile />
          </div>
          <div>{isSignin ? <LogoutButton /> : <LoginButton />}</div>
        </div>
      </TopContainer>
    </MainContainer>
  );
};

export default Header;
