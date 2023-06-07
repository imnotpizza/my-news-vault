import React from 'react';
import Image from 'next/image';
import StatusUI from './StatusUI';

const DefaultErrorUI = () => {
  return <StatusUI statusImage={<Image
    src="/svg/search-error-ui.svg"
    width={50}
    height={50}
    alt="검색 도중 문제가 발생하였습니다."
  />} text="검색 도중 문제가 발생하였습니다." />;
};

export default DefaultErrorUI;
