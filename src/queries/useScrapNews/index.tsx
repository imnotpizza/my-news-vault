'use client';

import { useMutation } from '@tanstack/react-query';
import { scrapNews, unscrapNews } from '@/api/client';
import { TBingNewsFilterQueries, TNewsItem, TUserInfo } from '@/types';
import { useToast } from '@/hooks/useToast';
import useBingNewsFetch, { updateNewsSearchQuery } from '../useBingNewsFetch';
import { addScrapNewsToCache, deleteScrapNewsFromCache } from '../useScrappedNewsList';
import useAuth from '@/hooks/useAuth';

// TODO: firebase -> aws로 대체

interface MutateParams {
  newsItem: TNewsItem;
  isScrapped: TNewsItem['isScrapped'];
  query: TBingNewsFilterQueries['keyword'];
  userId: TUserInfo['email'];
}

/**
 * 스트랩 추가 mutation
 * @returns mutation states
 */
export const useScrapNews = () => {
  const { authState } = useAuth();
  const userId = authState.userInfo?.email;
  const { filterQueries } = useBingNewsFetch.state();
  const queryStates = useMutation<void, Error, MutateParams>({
    onMutate: ({ newsItem, isScrapped }) => {
      updateNewsSearchQuery(newsItem.newsId, isScrapped, filterQueries);
      // @ts-ignore 
      addScrapNewsToCache({ ...newsItem, isScrapped }, userId);
    },
    mutationFn: async ({ newsItem, isScrapped, query, userId }: MutateParams) => {
      await scrapNews(userId, newsItem);
    },
  });

  /** update 중 에러 발생시 다시 unscrap 상태로 되돌림 */
  const rollbackScrapMutation = ({ newsItem, isScrapped }) => {
    updateNewsSearchQuery(newsItem.newsId, isScrapped, filterQueries);
    // @ts-ignore 
    deleteScrapNewsFromCache(newsItem.newsId, userId);
  };

  return {
    ...queryStates,
    rollbackScrapMutation,
  };
};

/**
 * 스크랩 삭제 mutation
 * @returns mutation states
 */
export const useUnscrapNews = () => {
  const { authState } = useAuth();
  const userId = authState.userInfo?.email;
  const { filterQueries } = useBingNewsFetch.state();
  const queryStates = useMutation<void, Error, MutateParams>({
    onMutate: ({ newsItem, isScrapped }) => {
      updateNewsSearchQuery(newsItem.newsId, isScrapped, filterQueries);
      // @ts-ignore 
      deleteScrapNewsFromCache(newsItem.newsId, userId);
    },
    mutationFn: async ({ newsItem, isScrapped, query, userId }: MutateParams) => {
      await unscrapNews(userId, newsItem.newsId);
    },
  });

  /** update 중 에러 발생시 다시 scrap 상태로 되돌림 */
  const rollbackUnscrapMutation = ({ newsItem, isScrapped }) => {
    updateNewsSearchQuery(newsItem.newsId, isScrapped, filterQueries);
    // @ts-ignore 
    addScrapNewsToCache({ ...newsItem, isScrapped }, userId);
  };

  return {
    ...queryStates,
    rollbackUnscrapMutation,
  };
};
