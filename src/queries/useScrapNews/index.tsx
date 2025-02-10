import { useMutation } from '@tanstack/react-query';
import { scrapNews, unscrapNews } from '@/api/client';
import { TBingNewsFilterQueries, TNewsItem, TUserInfo } from '@/types';
import { updateNewsSearchQuery } from '../useBingNewsFetch';
import { addScrapNewsToCache, deleteScrapNewsFromCache } from '../useScrappedNewsList';

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
  const queryStates = useMutation<void, Error, MutateParams>(
    // @ts-ignore
    async ({ newsItem, isScrapped, query, userId }: MutateParams) => {
      updateNewsSearchQuery(newsItem.newsId, isScrapped, query);
      await scrapNews(userId, newsItem);
      addScrapNewsToCache({ ...newsItem, isScrapped });
    },
    {
      onSuccess: () => {
        console.log('### scrap success');
      },
      onError: () => {
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
    // @ts-ignore
    async ({ newsItem, isScrapped, query, userId }: MutateParams) => {
      updateNewsSearchQuery(newsItem.newsId, isScrapped, query);
      await unscrapNews(userId, newsItem.newsId);
      deleteScrapNewsFromCache(newsItem.newsId);
    },
    {
      onSuccess: () => {
        console.log('### unscrap success');
      },
      onError: () => {
        alert('스크랩 삭제 도중 문제가 발생하였습니다.');
      },
      onSettled: () => {},
    },
  );

  return queryStates;
};
