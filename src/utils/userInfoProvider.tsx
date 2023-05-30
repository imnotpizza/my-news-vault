import { auth } from '@/firebase';
import { fetchScrappedNewsList } from '@/queries/useScrappedNewsList';
import { TUserInfo } from '@/types';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';

export interface IUserInfoContext {
  userInfo: TUserInfo | null;
  setUserInfo: React.Dispatch<React.SetStateAction<TUserInfo | null>>;
  isSignin: boolean;
}

const userInfoContext = React.createContext<IUserInfoContext>({
  userInfo: null,
  setUserInfo: (user) => {},
  isSignin: false,
});

const UserInfoProvider = ({ children }: any) => {
  const [userInfo, setUserInfo] = React.useState<IUserInfoContext['userInfo']>(null);

  return (
    <userInfoContext.Provider value={{ userInfo, setUserInfo, isSignin: Boolean(userInfo) }}>
      {children}
    </userInfoContext.Provider>
  );
};

export { userInfoContext, UserInfoProvider };
