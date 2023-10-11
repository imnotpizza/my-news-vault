import bingNewsSearchHandlers from './handlers/bingNewsSearchHandlers';
import newsScrapHandlers from './handlers/newsScrapHandlers';

// 데이터 호출
export const handlers = [...bingNewsSearchHandlers, ...newsScrapHandlers];
