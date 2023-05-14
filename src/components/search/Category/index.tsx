'use client';

import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 50px;
`;

const Category = () => {
  return (
    <Container>
      <Link href="/search">전체</Link>
      <Link href="/search/Politics">정치</Link>
      <Link href="/search/Business">경제</Link>
      <Link href="/search/ScienceAndTechnology">IT/기술</Link>
      <Link href="/search/Entertainment">연예</Link>
      <Link href="/search/Sports">스포츠</Link>
    </Container>
  );
};

export default Category;
