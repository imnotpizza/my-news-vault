'use client';

import { signin, signout } from '@/firebase';
import { userInfoContext } from '@/utils/userInfoProvider';
import UserProfileImage from '@/views/header/UserProfileImage';
import React, { memo } from 'react';

const UserProfile = () => {
  const { setUserInfo, userInfo } = React.useContext(userInfoContext);

  const onClickSignin = async () => {
    try {
      const newUserInfo = await signin();
      if (!newUserInfo) return;
      setUserInfo(newUserInfo);
    } catch (e) {
      alert('login failed');
    }
  };

  const onClickSignout = async () => {
    try {
      await signout();
      setUserInfo(null);
      console.log('############## 111111');
    } catch (e) {
      alert('logout failed');
    }
  };

  return (
    <div>
      <div>
        {userInfo ? (
          <button onClick={onClickSignout}>logout</button>
        ) : (
          <button onClick={onClickSignin}>login</button>
        )}
      </div>
      <div>
        {userInfo && <UserProfileImage src={userInfo.photoURL} alt={userInfo.displayName} />}
      </div>
    </div>
  );
};

export default memo(UserProfile);
