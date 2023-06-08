import { mockNewsItem, mockRawNewsItem, mockScrappedNewsItem } from './mockData';
import { deleteDuplicatedNews, hasSpecialCharacters, parseToNewsItem, setIsScrapped } from '.';

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

describe('deleteDuplicatedNews', () => {
  it('중복된 뉴스 없는경우 원본과 동일', () => {
    const result = deleteDuplicatedNews(mockNewsItem);
    expect(result).toBe(result);
  });

  it('중복된 뉴스 있는경우 중복된 뉴스 제거', () => {
    const result = deleteDuplicatedNews([
      ...mockNewsItem,
      mockNewsItem[0],
      mockNewsItem[0],
      mockNewsItem[1],
    ]);
    expect(result).toEqual(result);
  });
});

describe('hasSpecialCharacters', () => {
  it('특수문자 포함되지 않은 경우', () => {
    const result = hasSpecialCharacters('test가나다123TEST');
    expect(result).toBe(true);
  });
  it('특수문자 포함된 경우', () => {
    const result = hasSpecialCharacters('@#$test#@');
    expect(result).toBe(false);
  });
});
