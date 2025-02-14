import { signinWithFirebaseAuth } from '@/api/auth';
import { TUserInfo } from '@/types';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';

export const useSignin = (options: UseMutationOptions<TUserInfo>) => {
  const queryStates = useMutation({
    mutationKey: ['signin'],
    mutationFn: async () => {
      const newUserInfo = await signinWithFirebaseAuth();
      // @ts-ignore
      if (!newUserInfo) {
        throw new Error('user error');
      }
      return newUserInfo;
    },
    onError: () => {
      alert('로그인 도중 문제가 발생하였습니다.');
    },
    ...options,
  });
  return queryStates;
};

export const useSignout = (options: UseMutationOptions<void>) => {
  // @ts-ignore
  const queryStates = useMutation({
    mutationFn: async () => {},
    ...options,
  });
  return queryStates;
};
