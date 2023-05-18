import { fetchScrappedList } from '@/api/client';
import { TNewsItem, TUserInfo } from '@/types';
import { userInfoContext } from '@/utils/userInfoProvider';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import React from 'react';

export const scrappedNewsListQueryKey = 'ScrappedNewsList';

// firebase 연동
const useScrappedNewsList = () => {
  const { userInfo } = React.useContext(userInfoContext);
  const queryStates = useQuery<Awaited<ReturnType<typeof fetchScrappedList>>, AxiosError>(
    [scrappedNewsListQueryKey],
    () => fetchScrappedList(userInfo!.email),
    {
      enabled: Boolean(userInfo),
    },
  );

  return queryStates;
};

export default useScrappedNewsList;
