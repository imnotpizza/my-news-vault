import React from 'react';
import Image from 'next/image';
import StatusUI from './StatusUI';

const DefaultLoadingUI = () => {
  return (
    <StatusUI
      statusImage={<Image src="/svg/search-ui.svg" width={50} height={50} alt="로딩중" />}
    />
  );
};

export default DefaultLoadingUI;
