import { Button } from '@/components/atoms/Button';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import React from 'react';

const ToScrapPageButton = () => {
  const { isLogined } = useAuth();
  const router = useRouter();
  const onClick = () => {
    if (!isLogined) {
      alert('스크랩 기능은 로그인 후 사용해주세요.');
      return;
    }
    router.push('/scrap');
  };
  return (
    <Button size="sm" variant="link" onClick={onClick}>
      스크랩 목록
    </Button>
  );
};

export default ToScrapPageButton;
