'use client';

import QueryStateWrapper from '@/components/common/QueryStateWrapper';
import useScrappedNewsList from '@/queries/useScrappedNewsList';
import NewsItemList from '@/components/common/NewsItemList';
import React, { useContext } from 'react';

const NewsScrapPage = ({ userId }) => {
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
