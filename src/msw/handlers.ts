import { rest } from 'msw';
import mockRawNewsItems from '../../mockNews.json';

const query = 'mock';
const NEWS_COUNT_NUM = 20;
const offset = NEWS_COUNT_NUM * 1;

// 데이터 호출
export const handlers = [
  rest.get(`/news/search?mkt=en-us&q=${query}&count=${NEWS_COUNT_NUM}&offset=${offset}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mockRawNewsItems),
    );
  }),
];
