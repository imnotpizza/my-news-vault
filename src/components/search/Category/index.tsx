'use client';

import UserProfile from '@/components/user/UserProfile';
import { auth, googleProvider, signin, signout } from '@/firebase';
import { IUserInfo } from '@/types';
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
  const { setUserInfo } = React.useContext(userInfoContext);

  const onClickLogin = async () => {
    const userInfo = await signin();
    if (!userInfo) return;
    setUserInfo(userInfo as IUserInfo);
  };
  return (
    <Container>
      <button onClick={onClickLogin}>login</button>
      <button onClick={signout}>signout</button>
      <Link href={`/search`}>전체</Link>
      <Link href={`/search/Politics`}>정치</Link>
      <Link href={`/search/Business`}>경제</Link>
      <Link href={`/search/ScienceAndTechnology`}>IT/기술</Link>
      <Link href={`/search/Entertainment`}>연예</Link>
      <Link href={`/search/Sports`}>스포츠</Link>
      <Link href={`/scrap`}>스크랩 록록</Link>
      <UserProfile />
    </Container>
  );
};

export default Category;
