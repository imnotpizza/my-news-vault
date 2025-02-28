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
  const { toast } = useToast();
  const { filterQueries } = useBingNewsFetch.state();
  const queryStates = useMutation<void, Error, MutateParams>({
    onMutate: ({ newsItem, isScrapped, query, userId }) => {
      updateNewsSearchQuery(newsItem.newsId, isScrapped, filterQueries);
      addScrapNewsToCache({ ...newsItem, isScrapped });
    },
    mutationFn: async ({ newsItem, isScrapped, query, userId }: MutateParams) => {
      await scrapNews(userId, newsItem);
      toast({
        description: '스크랩 등록이 완료되었습니다',
      });
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
  const { toast } = useToast();
  const { filterQueries } = useBingNewsFetch.state();
  const queryStates = useMutation<void, Error, MutateParams>({
    onMutate: ({ newsItem, isScrapped, query, userId }) => {
      updateNewsSearchQuery(newsItem.newsId, isScrapped, filterQueries);
      deleteScrapNewsFromCache(newsItem.newsId);
    },
    mutationFn: async ({ newsItem, isScrapped, query, userId }: MutateParams) => {
      await unscrapNews(userId, newsItem.newsId);
      toast({
        description: '스크랩 삭제가 완료되었습니다',
      });
    },
    onError: (e) => {
      console.error(e);
      alert('스크랩 삭제 도중 문제가 발생하였습니다.');
    },
    onSettled: () => {},
  });

  return queryStates;
};
