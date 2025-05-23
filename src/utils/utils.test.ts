import { defaultNewsItem } from '@/constants';
import { mockNewsItem, mockRawNewsItem, mockScrappedNewsItem } from './mockData';
import {
  isDuplicatedNews,
  hasSpecialCharacters,
  parseDateToFormat,
  convertToNewsItem,
  setIsScrapped,
  getProviderIcon,
  getProviderName,
  createSearchUrlWithQueries,
} from './newsItem';

describe('getProviderIcon', () => {
  it('providerIcon 리턴', () => {
    const providerIcon = getProviderIcon(mockRawNewsItem.provider);
    expect(providerIcon).toBe(mockRawNewsItem.provider[0].image.thumbnail.contentUrl);
  });
  it('providerIcon 없을 경우 null 리턴', () => {
    const providerIcon = getProviderIcon(undefined);
    expect(providerIcon).toBe(null);
  });
});

describe('getProviderName', () => {
  it('providerName 리턴', () => {
    const providerName = getProviderName(mockRawNewsItem.provider);
    expect(providerName).toBe(mockRawNewsItem.provider[0].name);
  });
  it('providerName 없을 경우 null 리턴', () => {
    const providerName = getProviderName(undefined);
    expect(providerName).toBe(null);
  });
});

describe('parseToNewsItem', () => {
  it('초기화 값 제대로 들어가는지 확인', () => {
    const newsItem = convertToNewsItem(mockRawNewsItem, '2023-01-01', 'test-query', false);
    expect(newsItem.datePublished).toBe('2023-01-01');
    expect(newsItem.searchQuery).toBe('test-query');
    expect(newsItem.isScrapped).toBe(false);
  });

  it('원본 데이터 누락시', () => {
    const newsItem = convertToNewsItem(undefined, '2023-01-01', 'test-query', false);

    expect(newsItem.newsId).toBe(defaultNewsItem.newsId);
    expect(newsItem.datePublished).toBe('2023-01-01');
    expect(newsItem.description).toBe(defaultNewsItem.description);
    expect(newsItem.providerName).toBe(defaultNewsItem.providerName);
    expect(newsItem.providerIcon).toBe(defaultNewsItem.providerIcon);
    expect(newsItem.thumbnail).toBe(defaultNewsItem.thumbnail);
    expect(newsItem.title).toBe(defaultNewsItem.title);
    expect(newsItem.isScrapped).toBe(false);
    expect(newsItem.searchQuery).toBe('test-query');
    expect(newsItem.url).toBe(defaultNewsItem.url);
  });
});

describe('setIsScrapped', () => {
  it('스크랩된 뉴스 있는경우 true 반환', () => {
    const result = setIsScrapped(mockNewsItem[0].newsId, mockScrappedNewsItem);
    expect(result).toBe(true);
  });
  it('스크랩 안된 뉴스 있는경우 false 반환', () => {
    const result = setIsScrapped(mockNewsItem[1].newsId, mockScrappedNewsItem);
    expect(result).toBe(false);
  });
});

describe('isDuplicatedNews', () => {
  it('중복된 경우 true리턴', () => {
    const result = isDuplicatedNews(mockNewsItem[0].newsId, mockNewsItem);
    expect(result).toBe(true);
  });

  it('중복되지 않은 경우 false리턴', () => {
    const result = isDuplicatedNews(mockNewsItem[0].newsId, [
      {
        ...mockNewsItem[0],
        newsId: 'different-news-id',
      },
    ]);
    expect(result).toEqual(false);
  });
});

// TODO: 다른곳으로 이동
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

describe('parseDateToFormat', () => {
  it('날짜 형식 변환', () => {
    const result = parseDateToFormat('2021-08-12T10:00:00.0000000Z');
    expect(result).toBe('2021-08-12');
  });

  it('날짜 형식 변환 실패시', () => {
    const result = parseDateToFormat('NOTVALIDDATEFORMAT');
    expect(result).toBe('등록된 날짜 없음');
  });

  it('날짜 없을때', () => {
    const result = parseDateToFormat(undefined);
    expect(result).toBe('등록된 날짜 없음');
  });
});

describe('createSearchUrlWithQueries', () => {
  it('주어진 객체 사용하여 query string url 생성', () => {
    const testQueries = {
      name: 'jack',
      age: 10,
    };
    const result = createSearchUrlWithQueries(testQueries);
    expect(result).toBe('?name=jack&age=10');
  });
  it('null, undefined 빈 문자열 값은 제외하고 생성', () => {
    const result = createSearchUrlWithQueries({
      name: 'jack',
      age: 0,
      hobby: null,
      car: undefined,
      friend: '',
    });
    expect(result).toBe('?name=jack&age=0');
  });
});
