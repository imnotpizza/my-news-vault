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
      <Link href="/search/politics">정치</Link>
      <Link href="/search/economy">경제</Link>
      <Link href="/search/world">세계</Link>
      <Link href="/search/it">IT</Link>
      <Link href="/search/entertainment">연예</Link>
      <Link href="/search/sports">스포츠</Link>
    </Container>
  );
};

export default Category;
