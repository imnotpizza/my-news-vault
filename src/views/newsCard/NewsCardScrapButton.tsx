import React, { memo } from 'react';
import styled from 'styled-components';

interface IScrapButtonProps {
  isScrapped: boolean;
  disabled: boolean;
  onClickScarp: () => void;
  onClickUnscrap: () => void;
}

const ImgButton = styled.button`
  width: 0.63rem;
  height: 0.88rem;
  background: none;
  border: none;
  cursor: pointer;
`;

// TODO: optimistic update로 변경
const ScrapButton = ({ isScrapped, disabled, onClickScarp, onClickUnscrap }: IScrapButtonProps) => {
  if (isScrapped) {
    return (
      <ImgButton disabled={disabled} onClick={onClickUnscrap}>
        스크랩 삭제
      </ImgButton>
    );
  } else {
    return (
      <ImgButton disabled={disabled} onClick={onClickScarp}>
        스크랩
      </ImgButton>
    );
  }
};

export default memo(ScrapButton);
