import { auth } from '@/firebase';
import { IUserInfo } from '@/types';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';

export interface IUserInfoContext {
  userInfo: IUserInfo | null;
  setUserInfo: React.Dispatch<React.SetStateAction<IUserInfo | null>>;
}

const userInfoContext = React.createContext<IUserInfoContext>({
  userInfo: null,
  setUserInfo: (user) => {},
});

const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = React.useState<IUserInfoContext['userInfo']>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // 로그인 상태
        console.log('로그인 상태:', user);
        const { displayName, email, photoURL } = user;
        setUserInfo((prev) => {
          return { displayName, email, photoURL } as IUserInfo;
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
    <userInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </userInfoContext.Provider>
  );
};

export { userInfoContext, UserInfoProvider };
