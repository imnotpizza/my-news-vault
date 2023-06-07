import React from 'react';
import StatusUI from './StatusUI';

const DefaultErrorUI = () => {
  return <StatusUI statusImage={<div>loading anim</div>} text="검색 도중 문제가 발생하였습니다." />;
};

export default DefaultErrorUI;
