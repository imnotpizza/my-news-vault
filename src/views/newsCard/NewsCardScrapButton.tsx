import React, { memo } from 'react';
import styled from 'styled-components';
import ScrapIcon from './ScrapIcon';

interface IScrapButtonProps {
  isScrapped: boolean;
  onClickScarp: () => void;
  onClickUnscrap: () => void;
  disabled: boolean;
}

const ImgButton = styled.button`
  width: 1.63rem;
  height: 1.63rem;
  background: none;
  border: none;
  cursor: pointer;
`;

const ScrapButton = ({ isScrapped, onClickScarp, onClickUnscrap, disabled }: IScrapButtonProps) => {
  return (
    <ImgButton
      aria-label={isScrapped ? '스크랩 헤제 버튼' : '스크랩 추가 버튼'}
      disabled={disabled}
      onClick={() => {
        if (isScrapped) {
          onClickUnscrap();
        } else {
          onClickScarp();
        }
      }}
    >
      <ScrapIcon isScrapped={isScrapped} />
    </ImgButton>
  );
};

export default memo(ScrapButton);
