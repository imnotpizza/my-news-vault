import { TUserInfo } from '@/types';
import { atom } from 'jotai';
import React from 'react';

export interface IUserInfoContext {
  userInfo: TUserInfo | null;
  setUserInfo: React.Dispatch<React.SetStateAction<TUserInfo | null>>;
  isSignin: boolean;
}

export const authAtom = atom<Pick<IUserInfoContext, 'userInfo'>>({
  userInfo: null,
});

// TODO: context 제거, jotai atom으로 대체
const userInfoContext = React.createContext<IUserInfoContext>({
  userInfo: null,
  setUserInfo: () => {},
  isSignin: false,
});

const UserInfoProvider = ({ children, initialUserInfo = null }: any) => {
  const [userInfo, setUserInfo] =
    React.useState<IUserInfoContext['userInfo']>(initialUserInfo);

  return (
    <userInfoContext.Provider value={{ userInfo, setUserInfo, isSignin: Boolean(userInfo) }}>
      {children}
    </userInfoContext.Provider>
  );
};

export { userInfoContext, UserInfoProvider };
