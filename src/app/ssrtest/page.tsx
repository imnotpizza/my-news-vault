import React from 'react';
import RSC from '@/components/RSC';

// force static 활성화시 정적 페이지로 처리되어 값이 고정됨 (getStatisProps)
// 하위의 RSC 컴포넌트에도 일괄 적용
// export const dynamic = 'force-static';
export const revalidate = 5; // 5초마다 재검증

const getRandomData = () => {
  // Simulate fetching data from an API
  return Math.floor(Math.random() * 1000);
};

export default function SSRTest() {
  const res = getRandomData();
  return <RSC value={res} />;
}
