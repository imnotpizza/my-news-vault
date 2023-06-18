import { TNewsItem } from '@/types';
import React, { memo } from 'react';
// 삭제
interface IVisitButtonProps {
  url: TNewsItem['thumbnail'];
}

const VisitButton = ({ url }: IVisitButtonProps) => {
  const onClickVisit = () => {
    window.open(url);
  };

  return <button onClick={onClickVisit}>방문하기</button>;
};

export default memo(VisitButton);
