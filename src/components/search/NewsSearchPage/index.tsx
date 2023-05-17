'use client';

import React, { useContext } from 'react';
import useBingNewsFetch from '@/queries/useBingNewsFetch';
import QueryStateWrapper from '@/components/common/QueryStateWrapper';
import { newsQueryContext } from '@/utils/newsQueryContext';
import flatMap from 'lodash-es/flatMap';
import QueryForm from '../../input/QueryForm';
import NewsItemList from '../../common/NewsItemList';
import InfiniteScrollWrapper from '@/components/common/InfiniteScrollWrapper';

const NewsSearchPage = ({ category }) => {
  const { query } = useContext(newsQueryContext);

  const queryStates = useBingNewsFetch({
    query,
    category,
    enabled: true,
  });

  // TODO: query select로 이동
  const flattenData = flatMap(queryStates.data?.pages, (page) => {
    return page.map((newsItem) => {
      const isScrapped = false;
      return {
        ...newsItem,
        isScrapped,
      };
    });
  });

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
