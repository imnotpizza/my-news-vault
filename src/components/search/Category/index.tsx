'use client';

import UserProfile from '@/components/user/UserProfile';
import { auth, googleProvider, signin, signout } from '@/firebase';
import { newsQueryContext } from '@/utils/newsQueryContext';
import { userInfoContext } from '@/utils/userInfoProvider';
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
  const { query } = React.useContext(newsQueryContext);
  const queryUrl = query ? `?q=${query}` : '';
  const { setUserInfo } = React.useContext(userInfoContext);

  const onClickLogin = async () => {
    const userInfo = await signin();
    setUserInfo(userInfo);
  };
  return (
    <Container>
      <button onClick={onClickLogin}>login</button>
      <button onClick={signout}>signout</button>
      <Link href={`/search${queryUrl}`}>전체</Link>
      <Link href={`/search/Politics${queryUrl}`}>정치</Link>
      <Link href={`/search/Business${queryUrl}`}>경제</Link>
      <Link href={`/search/ScienceAndTechnology${queryUrl}`}>IT/기술</Link>
      <Link href={`/search/Entertainment${queryUrl}`}>연예</Link>
      <Link href={`/search/Sports${queryUrl}`}>스포츠</Link>
      <UserProfile/>
    </Container>
  );
};

export default Category;
