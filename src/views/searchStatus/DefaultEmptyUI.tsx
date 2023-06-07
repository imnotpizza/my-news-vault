import React from 'react';
import StatusUI from './StatusUI';

const DefaultEmptyUI = () => {
  return <StatusUI statusImage={<div>loading anim</div>} text="검색 결과가 없습니다." />;
};

export default DefaultEmptyUI;
