import { mockRawNewsItem } from './mockData';
import { parseToNewsItem } from '.';

describe('parseToNewsItem', () => {
  it('should return parsed news item', () => {
    const newsItem = parseToNewsItem(mockRawNewsItem);
    expect(newsItem).toEqual({
      newsId: 'test',
      datePublished: '2021-08-01',
      description: 'test',
      providerIcon: 'test',
      providerName: 'test',
      thumbnail: 'test',
      title: 'test',
      isScrapped: false,
      url: 'test',
    });
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