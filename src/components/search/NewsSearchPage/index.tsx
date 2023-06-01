'use client';

import React, { useContext, useMemo } from 'react';
import useBingNewsFetch from '@/queries/useBingNewsFetch';
import QueryStateWrapper from '@/components/common/QueryStateWrapper';
import QueryForm from '@/components/form/QueryForm';
import NewsItemList from '@/components/common/NewsItemList';
import InfiniteScrollWrapper from '@/components/common/InfiniteScrollWrapper';
import { userInfoContext } from '@/utils/userInfoProvider';
import { getFlattenList } from '@/utils';

const NewsSearchPage = ({ query }) => {
  const { userInfo } = React.useContext(userInfoContext);

  const queryStates = useBingNewsFetch({
    query,
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
        <QueryForm query={query} />
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
