import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Button = styled.button`
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  background: ${(p) => p.theme.White};
  border: 0.06rem solid ${(p) => p.theme.Navy.Navy_10};
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${(p) => p.theme.Navy.Navy_10};
    box-shadow: 0rem 0rem 0.25rem 0.06rem ${(p) => p.theme.Blue.Blue_L};
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
    &:hover {
      background: ${(p) => p.theme.White};
      box-shadow: none;
    }
  }
`;

const NewsSearchButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Button {...props}>
      <Image
        src="/svg/news-search-button-icon.svg"
        alt="뉴스 검색 버튼"
        width={14}
        height={14}
      />
    </Button>
  );
};

export default NewsSearchButton;
