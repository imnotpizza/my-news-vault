'use client';

import { Button } from '@/components/atoms/Button';
import React from 'react';

const ToScrapPageButotn = () => {
  // TODO: 로그인 상태 추후 추가
  const isSignin = false;
  // const { isSignin } = React.useContext(userInfoContext);
  // const router = useRouter();
  const onClick = () => {
    if (!isSignin) {
      alert('스크랩 기능은 로그인 후 사용해주세요.');
      return;
    }
    // router.push('/scrap');
  };
  return (
    <Button variant="outline" onClick={onClick}>
      스크랩 목록
    </Button>
  );
};

export default ToScrapPageButotn;
