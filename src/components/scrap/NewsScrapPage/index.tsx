import QueryStateWrapper from '@/components/common/QueryStateWrapper';
import useScrappedNewsList from '@/queries/useScrappedNewsList';
import NewsItemList from '@/components/common/NewsItemList';
import React, { useContext, useEffect } from 'react';
import { userInfoContext } from '@/utils/userInfoProvider';

const NewsScrapPage = () => {
  const { userInfo } = useContext(userInfoContext);
  const queryStates = useScrappedNewsList({ userId: userInfo?.email });

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
