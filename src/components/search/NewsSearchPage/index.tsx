'use client';

import React from 'react';
import useBingNewsFetch from '@/queries/useBingNewsFetch';
import QueryStateWrapper from '@/components/common/QueryStateWrapper';
import QueryForm from '@/components/form/NewsSearchForm';
import NewsItemList from '@/components/common/NewsItemList';
import InfiniteScrollWrapper from '@/components/common/InfiniteScrollWrapper';

const NewsSearchPage = ({ query }) => {
  const queryStates = useBingNewsFetch({
    query,
    enabled: query !== '',
    maxPage: 3,
  });

  return (
    <div>
      <div>
        <QueryForm query={query} />
      </div>
      <div>
        <QueryStateWrapper queryStates={queryStates as any}>
          <InfiniteScrollWrapper onTriggered={queryStates.fetchNextPage}>
            <NewsItemList newsItems={queryStates.flattenData} />
          </InfiniteScrollWrapper>
        </QueryStateWrapper>
      </div>
    </div>
  );
};

export default NewsSearchPage;
