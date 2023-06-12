import React from 'react';
import Image from 'next/image';
import StatusUI, { RoundUICover } from './StatusUI';

const ERR_TEXT = '검색어가 입력되지 않았습니다.';

const NewsQueryEmptyUI = () => {
  return (
    <StatusUI
      statusImage={
        <RoundUICover>
          <Image src="/svg/search-none-ui.svg" width={50} height={50} alt={ERR_TEXT} />
        </RoundUICover>
      }
      text={ERR_TEXT}
    />
  );
};

export default NewsQueryEmptyUI;
