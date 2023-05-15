import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';

const userInfoContext = React.createContext({
  userInfo: {},
  setUserInfo: (user: any) => {},
});

const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = React.useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // 로그인 상태
        console.log('로그인 상태:', user);
        const { displayName, email, photoURL } = user;
        setUserInfo((prev) => {
          return { displayName, email, photoURL };
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
