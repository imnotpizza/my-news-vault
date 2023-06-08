import React, { memo } from 'react';
import styled from 'styled-components';
import ScrapIcon from './ScrapIcon';

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
  return (
    <ImgButton disabled={disabled} onClick={isScrapped ? onClickUnscrap : onClickScarp}>
      <ScrapIcon clicked={isScrapped} />
    </ImgButton>
  );
};

export default memo(ScrapButton);
