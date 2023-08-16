import { useMutation } from '@tanstack/react-query';
import { scrapNews, unscrapNews } from '@/api/client';
import { TBingNewsQuery, TNewsItem, TUserInfo } from '@/types';
import { updateNewsSearchQuery } from '../useBingNewsFetch';
import { addScrapNewsToCache, deleteScrapNewsFromCache } from '../useScrappedNewsList';

interface MutateParams {
  newsItem: TNewsItem;
  isScrapped: TNewsItem['isScrapped'];
  query: TBingNewsQuery['query'];
  userId: TUserInfo['email'];
}

/**
 * 스트랩 추가 mutation
 * @returns mutation states
 */
export const useScrapNews = () => {
  const queryStates = useMutation<void, Error, MutateParams>(
    async ({ newsItem, isScrapped, query, userId }: MutateParams) => {
      updateNewsSearchQuery(newsItem.newsId, isScrapped, query);
      await scrapNews(userId, newsItem);
      addScrapNewsToCache({ ...newsItem, isScrapped });
    },
    {
      onSuccess: () => {
        console.log('### scrap success');
      },
      onError: (e) => {
        alert('스크랩 추가 도중 문제가 발생하였습니다.');
      },
      onSettled: () => {},
    },
  );

  return queryStates;
};

/**
 * 스크랩 삭제 mutation
 * @returns mutation states
 */
export const useUnscrapNews = () => {
  const queryStates = useMutation<void, Error, MutateParams>(
    async ({ newsItem, isScrapped, query, userId }: MutateParams) => {
      updateNewsSearchQuery(newsItem.newsId, isScrapped, query);
      await unscrapNews(userId, newsItem.newsId);
      deleteScrapNewsFromCache(newsItem.newsId);
    },
    {
      onSuccess: () => {
        console.log('### unscrap success');
      },
      onError: (e) => {
        alert('스크랩 삭제 도중 문제가 발생하였습니다.');
      },
      onSettled: () => {},
    },
  );

  return queryStates;
};
