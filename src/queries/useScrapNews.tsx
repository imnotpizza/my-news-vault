import { useMutation } from '@tanstack/react-query';
import { scrapNews, unscrapNews } from '@/api/client';
import { updateNewsSearchQuery } from './useBingNewsFetch';
import { addScrapNewsToCache, deleteScrapNewsFromCache } from './useScrappedNewsList';
import { TBingNewsQuery, TNewsItem, TUserInfo } from '@/types';

interface MutateParams {
  newsItem: TNewsItem;
  isScrapped: boolean;
  searchQuery: TBingNewsQuery['query'];
  userId: TUserInfo['email'];
}

export const useScrapNews = () => {
  const queryStates = useMutation<void, Error, MutateParams>(
    async ({ newsItem, isScrapped, searchQuery, userId }: MutateParams) => {
      updateNewsSearchQuery(newsItem.newsId, isScrapped, searchQuery);
      await scrapNews(userId, newsItem);
      addScrapNewsToCache(newsItem);
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

export const useUnscrapNews = () => {
  const queryStates = useMutation(
    async ({ newsItem, isScrapped, searchQuery, userId }: MutateParams) => {
      updateNewsSearchQuery(newsItem.newsId, isScrapped, searchQuery);
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
