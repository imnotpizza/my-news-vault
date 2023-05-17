'use client';

import NewsItemList from '@/components/common/NewsItemList';
import QueryStateWrapper from '@/components/common/QueryStateWrapper';
import useScrappedNewsList from '@/queries/useScrappedNewsList';
import React, { useContext } from 'react';

const NewsScrapPage = () => {
  const queryStates = useScrappedNewsList();

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
