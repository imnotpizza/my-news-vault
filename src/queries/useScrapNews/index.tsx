'use client';

import { useMutation } from '@tanstack/react-query';
import { scrapNews, unscrapNews } from '@/api/client';
import { TBingNewsFilterQueries, TNewsItem, TUserInfo } from '@/types';
import useBingNewsFetch, { updateNewsSearchQuery } from '../useBingNewsFetch';
import { addScrapNewsToCache, deleteScrapNewsFromCache } from '../useScrappedNewsList';
import { useToast } from '@/hooks/useToast';

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
  const { filterQueries } = useBingNewsFetch.state();
  const queryStates = useMutation<void, Error, MutateParams>({
    onMutate: ({ newsItem, isScrapped }) => {
      updateNewsSearchQuery(newsItem.newsId, isScrapped, filterQueries);
      addScrapNewsToCache({ ...newsItem, isScrapped });
    },
    mutationFn: async ({ newsItem, isScrapped, query, userId }: MutateParams) => {
      await scrapNews(userId, newsItem);
    },
  });

  /** update 중 에러 발생시 다시 unscrap 상태로 되돌림 */
  const rollbackScrapMutation = ({ newsItem, isScrapped }) => {
    updateNewsSearchQuery(newsItem.newsId, isScrapped, filterQueries);
    deleteScrapNewsFromCache(newsItem.newsId);
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
  const { filterQueries } = useBingNewsFetch.state();
  const queryStates = useMutation<void, Error, MutateParams>({
    onMutate: ({ newsItem, isScrapped }) => {
      updateNewsSearchQuery(newsItem.newsId, isScrapped, filterQueries);
      deleteScrapNewsFromCache(newsItem.newsId);
    },
    mutationFn: async ({ newsItem, isScrapped, query, userId }: MutateParams) => {
      await unscrapNews(userId, newsItem.newsId);
    },
  });

  /** update 중 에러 발생시 다시 scrap 상태로 되돌림 */
  const rollbackUnscrapMutation = ({ newsItem, isScrapped }) => {
    updateNewsSearchQuery(newsItem.newsId, isScrapped, filterQueries);
    addScrapNewsToCache({ ...newsItem, isScrapped });
  };

  return {
    ...queryStates,
    rollbackUnscrapMutation,
  };
};
