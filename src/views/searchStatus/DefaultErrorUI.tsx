import React from 'react';
import Image from 'next/image';
import StatusUI, { RoundUICover } from './StatusUI';

const ERR_TEXT = '알 수 없는 문제가 발생하였습니다.';

const DefaultErrorUI = ({ errText = ERR_TEXT }) => {
  return (
    <StatusUI
      statusImage={
        <RoundUICover>
          <Image data-testid="error-ui" src="/svg/search-error-ui.svg" width={50} height={50} alt={errText} />
        </RoundUICover>
      }
      text={errText}
    />
  );
};

export default DefaultErrorUI;
