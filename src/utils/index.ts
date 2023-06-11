import { TNewsItem, TRawNewsItem } from '@/types';

/**
 * YYYY-MM-DD hh:mm 형식으로 날짜 변환
 */
export const parseDateToFormat = (date: string) => {
  if (!date) return '등록된 날짜 없음';
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
  const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();

  // 날짜 형식 잘못된 경우
  if (!year || !month || !day) return '등록된 날짜 없음';

  return `${year}-${month}-${day}`;
};

/**
 * Bing News API 응답데이터를 클라이언트에서 사용할 형식으로 변환
 * @param raw: Bing News API 원본 데이터
 */
export const parseToNewsItem = (raw: TRawNewsItem) => {
  const newsItem: TNewsItem = {
    newsId: raw.name,
    datePublished: parseDateToFormat(raw.datePublished),
    description: raw.description,
    providerIcon: raw.provider[0].image ? raw.provider[0].image?.thumbnail.contentUrl : '',
    providerName: raw.provider[0].name,
    thumbnail: raw.image ? raw.image?.thumbnail.contentUrl : '',
    title: raw.name,
    isScrapped: false,
    url: raw.url,
  };

  return newsItem;
};

/**
 * 스크랩 여부 초기화
 * @param newsItemList: 검색결과 리스트
 * @param scrappedNewsList: 스크랩 리스트
 */
export const setIsScrapped = (newsItemList: TNewsItem[], scrappedNewsList: TNewsItem[]) => {
  if (!scrappedNewsList) return newsItemList;
  const scrappedNewsIdList = scrappedNewsList.map((item) => item.newsId);
  return newsItemList.map((item) => {
    if (scrappedNewsIdList.includes(item.newsId)) {
      return { ...item, isScrapped: true };
    } else {
      return { ...item, isScrapped: false };
    }
  });
};

/**
 * newNewsItems에서 curNewsItems에 이미 존재하는 중복요소 제거
 * @param newsItemList: 검색결과 리스트
 * @param scrappedNewsList: 스크랩 리스트
 */
export const deleteDuplicatedNews = (curNewsItems: TNewsItem[], newNewsItems: TNewsItem[]) => {
  if (curNewsItems.length === 0) return newNewsItems;
  return newNewsItems.filter((item) => {
    const isDuplicated = curNewsItems.find((curItem) => {
      return curItem.newsId === item.newsId;
    });
    return !isDuplicated;
  });
};

/**
 * 특수문자 포함되었는지 확인
 * @param str : test할 문자열
 * @returns 결과값
 */
export const hasSpecialCharacters = (str: string) => {
  const regExp = /[~!@#$%^&*()_+|<>?:{}]/;
  return !regExp.test(str);
};
