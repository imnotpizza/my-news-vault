'use client';

import React, { useContext, useMemo } from 'react';
import useBingNewsFetch from '@/queries/useBingNewsFetch';
import QueryStateWrapper from '@/components/common/QueryStateWrapper';
import { newsQueryContext } from '@/utils/newsQueryContext';
import QueryForm from '@/components/form/QueryForm';
import NewsItemList from '@/components/common/NewsItemList';
import InfiniteScrollWrapper from '@/components/common/InfiniteScrollWrapper';
import { userInfoContext } from '@/utils/userInfoProvider';
import { getFlattenList } from '@/utils';

const NewsSearchPage = ({ category }) => {
  const { query } = useContext(newsQueryContext);
  const { userInfo } = useContext(userInfoContext);
  console.log('############# userInfo', 'bobin6972@gmail.com');
  const queryStates = useBingNewsFetch({
    query,
    category,
    enabled: true,
    userId: userInfo?.email,
  });

  const flattenData = useMemo(
    () => getFlattenList(queryStates.data?.pages),
    [queryStates.data?.pages],
  );

  return (
    <div>
      <div>
        <QueryForm />
      </div>
      <div>
        <QueryStateWrapper queryStates={queryStates as any}>
          <InfiniteScrollWrapper onTriggered={queryStates.fetchNextPage}>
            <NewsItemList newsItems={flattenData} />
          </InfiniteScrollWrapper>
        </QueryStateWrapper>
      </div>
    </div>
  );
};

export default NewsSearchPage;
