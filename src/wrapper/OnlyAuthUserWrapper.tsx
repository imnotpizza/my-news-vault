import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const OnlyAuthUserWrapper = ({ isSignin, children }) => {
  const router = useRouter();
  useEffect(() => {
    if (!isSignin) {
      alert('로그인이 필요합니다.');
      router.back();
    }
  }, []);
  return <div>{children}</div>;
};

export default OnlyAuthUserWrapper;
