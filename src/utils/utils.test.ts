import { mockNewsItem, mockRawNewsItem, mockScrappedNewsItem } from './mockData';
import { parseToNewsItem, setIsScrapped } from '.';

describe('parseToNewsItem', () => {
  it('should return parsed news item', () => {
    const newsItem = parseToNewsItem(mockRawNewsItem);
    expect(newsItem).toEqual(mockNewsItem[0]);
  });

  it('publishedDate 파싱 실패시', () => {
    const newsItem = parseToNewsItem({ ...mockRawNewsItem, datePublished: undefined });
    expect(newsItem.datePublished).toBe('등록된 날짜 없음');
  });

  it('publishedDate 형식 잘못되었을 때', () => {
    const newsItem = parseToNewsItem({ ...mockRawNewsItem, datePublished: 'NOTVALIDDATEFORMAT' });
    expect(newsItem.datePublished).toBe('등록된 날짜 없음');
  });
});

describe('setIsScrapped', () => {
  it('스크랩 여부 판별', () => {
    const result = setIsScrapped(mockNewsItem, mockScrappedNewsItem);
    expect(result[0].isScrapped).toBe(true);
    expect(result[1].isScrapped).toBe(false);
  });
});
