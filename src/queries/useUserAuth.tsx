import { signinWithFirebaseAuth, signoutWithFirebaseAuth } from '@/api/auth';
import { TUserInfo } from '@/types';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';

export const useSignin = (options: UseMutationOptions<TUserInfo>) => {
  const queryStates = useMutation<TUserInfo, Error>(
    async () => {
      const newUserInfo = await signinWithFirebaseAuth();
      if (!newUserInfo) {
        throw new Error('user error');
      }
      return newUserInfo;
    },
    {
      ...options,
      onError: () => {
        alert('로그인 도중 문제가 발생하였습니다.');
      },
    },
  );
  return queryStates;
};

export const useSignout = (options: UseMutationOptions<void>) => {
  const queryStates = useMutation<void, Error>(async () => {
    await signoutWithFirebaseAuth();
  }, options);
  return queryStates;
};
