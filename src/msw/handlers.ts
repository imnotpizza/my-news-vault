import { TBingNewsAPIRes } from '@/types';
import { rest } from 'msw';
import mockRawNewsItems from '../../mockNews.json';

const query = 'mock';
const NEWS_COUNT_NUM = 20;
const offset = NEWS_COUNT_NUM * 1;

export const getMswRestHandler = (callback: Parameters<typeof rest.get>[1]) => {
  return rest.get(
    `/news/search?mkt=en-us&q=${query}&count=${NEWS_COUNT_NUM}&offset=${offset}`,
    callback,
  );
};

// 데이터 호출
export const handlers = [
  getMswRestHandler((req, res, ctx) => {
    const mockData: TBingNewsAPIRes = {
      queryContext: {
        adultIntent: false,
        originalQuery: 'mock',
      },
      readLink: 'https://api.bing.microsoft.com/api/v7/news/search?q=mock',
      totalEstimatedMatches: 1000,
      value: mockRawNewsItems,
    };

    return res(ctx.status(200), ctx.json(mockData));
  }),
];
