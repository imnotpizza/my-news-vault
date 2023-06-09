import React, { memo } from 'react';
import styled from 'styled-components';
import ScrapIcon from './ScrapIcon';

interface IScrapButtonProps {
  isScrapped: boolean;
  onClickScarp: () => void;
  onClickUnscrap: () => void;
}

const ImgButton = styled.button`
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  cursor: pointer;
`;

const ScrapButton = ({ isScrapped, onClickScarp, onClickUnscrap }: IScrapButtonProps) => {
  return (
    <ImgButton
      disabled={disabled}
      onClick={() => {
        if (isScrapped) {
          onClickUnscrap();
        } else {
          onClickScarp();
        }
      }}
    >
      <ScrapIcon clicked={isScrapped} />
    </ImgButton>
  );
};

export default memo(ScrapButton);
