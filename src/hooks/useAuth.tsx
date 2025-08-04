import { TUserInfo } from '@/types';
import { atom, useAtom } from 'jotai';
import { useMemo } from 'react';

interface IAuthState {
  userInfo: TUserInfo | null;
}

export const authAtom = atom<IAuthState>({
  userInfo: null,
});

export default function useAuth() {
  const [authState, _setAuthState] = useAtom(authAtom);

  const setUserInfo = (newUserInfo: Partial<IAuthState['userInfo']> | null) => {
    //@ts-ignore
    _setAuthState((prev) => {
      return {
        ...prev,
        userInfo:
          newUserInfo === null
            ? null
            : {
              ...prev.userInfo,
              newUserInfo,
            },
      };
    });
  };

  const isLogined = useMemo(() => {
    return authState.userInfo !== null;
  }, [authState.userInfo]);

  return { authState, setUserInfo, isLogined };
}
