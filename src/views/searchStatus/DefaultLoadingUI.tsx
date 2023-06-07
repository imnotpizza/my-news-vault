import React from 'react';
import StatusUI from './StatusUI';

const DefaultLoadingUI = () => {
  return <StatusUI statusImage={<div>loading anim</div>} text="로딩중..." />;
};

export default DefaultLoadingUI;
