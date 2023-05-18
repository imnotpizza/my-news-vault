'use client';

import { userInfoContext } from '@/utils/userInfoProvider';
import Link from 'next/link';
import React, { useContext } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 50px;
`;

const Categories = () => {
  const { isSignin } = useContext(userInfoContext);
  return (
    <Container>
      <Link href={`/Politics`}>정치</Link>
      <Link href={`/Business`}>경제</Link>
      <Link href={`/ScienceAndTechnology`}>IT/기술</Link>
      <Link href={`/Entertainment`}>연예</Link>
      <Link href={`/Sports`}>스포츠</Link>
      {isSignin && <Link href={`/scrap`}>스크랩 록록</Link>}
    </Container>
  );
};

export default Categories;