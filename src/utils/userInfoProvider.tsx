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

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // 로그인 상태
        console.log('로그인 상태:', user);
        const { displayName, email, photoURL } = user;
        await fetchScrappedNewsList(email);
        setUserInfo((prev) => {
          return { displayName, email, photoURL } as TUserInfo;
        });
      } else {
        // 로그아웃 상태
        console.log('로그아웃 상태');
        // 로그아웃 상태에 따른 처리 로직 수행 가능
        setUserInfo((prev) => null);
      }
    });
  }, []);

  return (
    <userInfoContext.Provider value={{ userInfo, setUserInfo, isSignin: Boolean(userInfo) }}>
      {children}
    </userInfoContext.Provider>
  );
};

export { userInfoContext, UserInfoProvider };
