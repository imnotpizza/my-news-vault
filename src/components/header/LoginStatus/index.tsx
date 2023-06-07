import { signin, signout } from '@/firebase';
import { userInfoContext } from '@/utils/userInfoProvider';
import UserProfileImage from '@/views/header/UserProfileImage';
import { useRouter } from 'next/navigation';
import React, { memo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 155px;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const UserProfile = () => {
  const { setUserInfo, userInfo, isSignin } = React.useContext(userInfoContext);
  const router = useRouter();

  const onClickSignin = async () => {
    try {
      const newUserInfo = await signin();
      if (!newUserInfo) return;
      setUserInfo(newUserInfo);
    } catch (e) {
      alert('signin failed');
    }
  };

  const onClickSignout = async () => {
    try {
      await signout();
      setUserInfo(null);
      router.push('/');
    } catch (e) {
      alert('signout failed');
    }
  };

  return (
    <Container>
      <div>
        {isSignin ? (
          <button onClick={onClickSignout}>sign out</button>
        ) : (
          <button onClick={onClickSignin}>sign in</button>
        )}
      </div>
      <p>{userInfo?.email}</p>
      <div>
        {userInfo && <UserProfileImage src={userInfo.photoURL} alt={userInfo.displayName} />}
      </div>
    </Container>
  );
};

export default memo(UserProfile);
