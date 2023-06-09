import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Button = styled.button`
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  background: ${(p) => p.theme.White};;
  border: 1px solid #e8e9ee;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewsSearchButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Button {...props}>
      <Image src="/svg/news-search-button-icon.svg" alt="뉴스 검색 버튼" width={14} height={14} />
    </Button>
  );
};

export default NewsSearchButton;
