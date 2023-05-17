import { INewsItem } from '@/types';
import React, { memo } from 'react';

interface IVisitButtonProps {
  url: INewsItem['thumbnail'];
}

const VisitButton = ({ url }: IVisitButtonProps) => {
  const onClickVisit = () => {
    window.open(url);
  };

  return <button onClick={onClickVisit}>방문하기</button>;
};

export default memo(VisitButton);
