import React, { memo } from 'react';

interface IScrapButtonProps {
  isScrapped: boolean;
  disabled: boolean;
  onClickScarp: () => void;
  onClickUnscrap: () => void;
}

// TODO: optimistic update로 변경
const ScrapButton = ({ isScrapped, disabled, onClickScarp, onClickUnscrap }: IScrapButtonProps) => {
  if (isScrapped) {
    return (
      <button disabled={disabled} onClick={onClickScarp}>
        스크랩 삭제
      </button>
    );
  } else {
    return (
      <button disabled={disabled} onClick={onClickUnscrap}>
        스크랩
      </button>
    );
  }
};

export default memo(ScrapButton);
