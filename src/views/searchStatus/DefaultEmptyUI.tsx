import React from 'react';
import Image from 'next/image';
import StatusUI, { RoundUICover } from './StatusUI';

const DefaultEmptyUI = () => {
  return (
    <StatusUI
      statusImage={
        <RoundUICover>
          <Image data-testid="empty-ui" src="/svg/search-none-ui.svg" width={50} height={50} alt="검색 결과가 없습니다." />
        </RoundUICover>
      }
      text="검색 결과가 없습니다."
    />
  );
};

export default DefaultEmptyUI;
