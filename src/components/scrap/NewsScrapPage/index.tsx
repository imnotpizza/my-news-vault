'use client';

import QueryStateWrapper from '@/components/common/QueryStateWrapper';
import useScrappedNewsList from '@/queries/useScrappedNewsList';
import NewsItemList from '@/components/common/NewsItemList';
import React, { useContext, useEffect } from 'react';
import { userInfoContext } from '@/utils/userInfoProvider';
import { useRouter } from 'next/navigation';

const NewsScrapPage = ({ userId }) => {
  const { isSignin } = useContext(userInfoContext);
  const router = useRouter();
  const queryStates = useScrappedNewsList();

  useEffect(() => {
    if (!isSignin) {
      alert('로그인 후 사용해주세요');
      router.replace('/');
    }
  }, []);

  return (
    <div>
      <div>
        <QueryStateWrapper queryStates={queryStates}>
          <NewsItemList newsItems={queryStates.data} />
        </QueryStateWrapper>
      </div>
    </div>
  );
};

export default NewsScrapPage;
