import { TBingNewsAPIRes } from '@/types';
import { rest } from 'msw';
import mockRawNewsItems from '../../../mockNews.json';

// constants
export const DEFAULT_MOCK_QUERY = 'mock';
export const EMPTY_RES_MOCK_QUERY = 'empty';
const NEWS_COUNT_NUM = 20;
const offset = NEWS_COUNT_NUM * 1;

// handler factory function
export const getBingNewsSearchMswHandler = (
  query: string,
  callback: Parameters<typeof rest.get>[1],
) => {
  return rest.get(
    `/news/search?mkt=en-us&q=${query}&count=${NEWS_COUNT_NUM}&offset=${offset}`,
    callback,
  );
};

// success
const getSuccessRes = getBingNewsSearchMswHandler(DEFAULT_MOCK_QUERY, (req, res, ctx) => {
  const mockData: TBingNewsAPIRes = {
    queryContext: {
      adultIntent: false,
      originalQuery: 'none',
    },
    readLink: 'https://api.bing.microsoft.com/api/v7/news/search?q=none',
    totalEstimatedMatches: 1000,
    value: mockRawNewsItems,
  };

  return res(ctx.status(200), ctx.json(mockData));
});

// error
const getErrorRes = getBingNewsSearchMswHandler(EMPTY_RES_MOCK_QUERY, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json([]));
});

export default [getSuccessRes, getErrorRes];
