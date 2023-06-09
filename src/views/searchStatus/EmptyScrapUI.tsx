import React from 'react';
import Image from 'next/image';
import StatusUI from './StatusUI';

const EmptyScrapUI = () => {
  return (
    <StatusUI
      statusImage={
        <Image src="/svg/search-none-ui.svg" width={50} height={50} alt="검색 결과가 없습니다." />
      }
      text="스크랩한 뉴스가 없습니다."
    />
  );
};

export default EmptyScrapUI;
