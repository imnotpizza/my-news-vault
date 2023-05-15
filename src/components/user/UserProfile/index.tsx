import { userInfoContext } from '@/utils/userInfoProvider';
import React from 'react';

const UserProfile = () => {
  const { userInfo } = React.useContext(userInfoContext);
  if (!userInfo) return null;
  return (
    <div>
      <img src={userInfo?.photoURL} alt="user profile" />
      <div>{userInfo?.displayName}</div>
      <div>{userInfo?.email}</div>
    </div>
  );
};

export default UserProfile;
