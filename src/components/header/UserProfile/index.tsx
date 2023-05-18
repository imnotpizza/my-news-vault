'use client';

import { signin, signout } from '@/firebase';
import { userInfoContext } from '@/utils/userInfoProvider';
import UserProfileImage from '@/views/header/UserProfileImage';
import React, { memo } from 'react';

const UserProfile = () => {
  const { setUserInfo, userInfo, isSignin } = React.useContext(userInfoContext);

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
    } catch (e) {
      alert('signout failed');
    }
  };

  return (
    <div>
      <div>
        {isSignin ? (
          <button onClick={onClickSignout}>sign out</button>
        ) : (
          <button onClick={onClickSignin}>sign in</button>
        )}
      </div>
      <div>
        {userInfo && <UserProfileImage src={userInfo.photoURL} alt={userInfo.displayName} />}
      </div>
    </div>
  );
};

export default memo(UserProfile);
