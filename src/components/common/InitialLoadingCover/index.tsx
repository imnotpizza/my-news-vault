'use client';

import { auth } from '@/firebase';
import { queryClient } from '@/queries/queryClient';
import { fetchScrappedNewsList, scrappedNewsListQueryKey } from '@/queries/useScrappedNewsList';
import { TUserInfo } from '@/types';
import { userInfoContext } from '@/utils/userInfoProvider';
import { onAuthStateChanged } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: green;
`;

const LoadingSign = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background-color: blue;
`;

// 초반 로딩 페이지
const InitialLoadingCover = ({ children }) => {
  const [loaded, setLoaded] = useState(false);
  const { setUserInfo } = useContext(userInfoContext);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // 로그인 상태
          console.log('로그인 상태:', user);
          const { displayName, email, photoURL } = user;

          // 로그인 상태에 따른 처리 로직 수행 가능
          await fetchScrappedNewsList(email);
          setUserInfo({ displayName, email, photoURL });
          setLoaded(true);
        } catch (e) {
          console.error(e);
        }
      } else {
        // 로그아웃 상태
        console.log('로그아웃 상태');
        // 로그아웃 상태에 따른 처리 로직 수행 가능
        setUserInfo(null);
      }
    });
  }, []);

  if (!loaded) {
    return (
      <Container>
        <LoadingSign />
      </Container>
    );
  } else {
    return children;
  }
};

export default InitialLoadingCover;
