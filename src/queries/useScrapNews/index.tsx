import { useMutation } from '@tanstack/react-query';
import { scrapNews, unscrapNews } from '@/api/client';
import { TBingNewsFilterQueries, TNewsItem, TUserInfo } from '@/types';
import useBingNewsFetch, { updateNewsSearchQuery } from '../useBingNewsFetch';
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
  const { filterQueries } = useBingNewsFetch.state();
  const queryStates = useMutation<void, Error, MutateParams>({
    onMutate: ({newsItem, isScrapped, query, userId}) => {
      updateNewsSearchQuery(newsItem.newsId, isScrapped, filterQueries);
      addScrapNewsToCache({ ...newsItem, isScrapped });
    },
    mutationFn: async ({ newsItem, isScrapped, query, userId }: MutateParams) => {
      await scrapNews(userId, newsItem);
    },
    onError: (e) => {
      console.error(e);
      alert('스크랩 추가 도중 문제가 발생하였습니다.');
    },
    onSettled: () => {},
  });

  return queryStates;
};

/**
 * 스크랩 삭제 mutation
 * @returns mutation states
 */
export const useUnscrapNews = () => {
  const { filterQueries } = useBingNewsFetch.state();
  const queryStates = useMutation<void, Error, MutateParams>({
    onMutate: ({newsItem, isScrapped, query, userId}) => {
      updateNewsSearchQuery(newsItem.newsId, isScrapped, filterQueries);
      deleteScrapNewsFromCache(newsItem.newsId);
    },
    mutationFn: async ({ newsItem, isScrapped, query, userId }: MutateParams) => {
      // updateNewsSearchQuery(newsItem.newsId, isScrapped, query);
      await unscrapNews(userId, newsItem.newsId);
      // deleteScrapNewsFromCache(newsItem.newsId);
    },
    onError: (e) => {
      console.error(e);
      alert('스크랩 삭제 도중 문제가 발생하였습니다.');
    },
    onSettled: () => {},
  });

  return queryStates;
};
