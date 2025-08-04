import { defaultNewsItem } from '@/constants';
import { TBingNewsFilterQueries, TNewsItem, TRawNewsItem } from '@/types';
import { fetchBingNews } from '@/api/client';
import APIError from '@/utils/APIError';
import ERRCODE from '@/constants/errCode';
// eslint-disable-next-line import/no-cycle
import { queryOptionsFactory } from '@/utils/queryOptionsFactory';
import { queryClient } from '@/queries/queryClient';
import { getSearchQueryCache } from '@/queries/useBingNewsFetch';

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
 * provider 데이터에서 providerIcon 추출
 * @param provider: provider 데이터
 * @returns providerIcon, 없으면 null
 */
export const getProviderIcon = (provider: TRawNewsItem['provider']) => {
  if (!provider) return null;
  const providerIcon = provider[0].image?.thumbnail?.contentUrl;
  return providerIcon || null;
};

/**
 * provider 데이터에서 providerName 추출
 * @param provider: provider 데이터
 * @returns providerName, 없으면 null
 */
export const getProviderName = (provider: TRawNewsItem['provider']) => {
  if (!provider) return null;
  const providerName = provider[0].name;
  return providerName || null;
};

/**
 * Bing News API 응답데이터를 클라이언트에서 사용할 형식으로 변환
 * @param raw: Bing News API 원본 데이터
 * @param searchQuery: 검색어
 * @param isScrapped: 스크랩 여부
 * @returns TNewsItem
 */
export const convertToNewsItem = (
  raw: TRawNewsItem,
  datePublished: string,
  searchQuery: TBingNewsFilterQueries['keyword'],
  isScrapped: boolean,
) => {
  return {
    newsId: raw?.name || defaultNewsItem.newsId,
    datePublished: parseDateToFormat(datePublished) || defaultNewsItem.datePublished,
    description: raw?.description || defaultNewsItem.description,
    providerIcon: getProviderIcon(raw?.provider) || defaultNewsItem.providerIcon,
    providerName: getProviderName(raw?.provider) || defaultNewsItem.providerName,
    thumbnail: raw?.image ? raw?.image?.thumbnail.contentUrl : defaultNewsItem.thumbnail,
    title: raw?.name || defaultNewsItem.title,
    isScrapped,
    searchQuery,
    url: raw?.url || defaultNewsItem.url,
  };
};

/**
 * 스크랩 여부 플래그 획득
 * @param targetNewsId: 스크랩 여부 초기화할 뉴스 아이디
 * @param scrappedNewsList: 스크랩 리스트
 */
export const setIsScrapped = (
  targetNewsId: TNewsItem['newsId'],
  scrappedNewsList: TNewsItem[],
) => {
  if (!scrappedNewsList) return false;

  const hasSame = scrappedNewsList.find((item) => item.newsId === targetNewsId);
  return Boolean(hasSame);
};

/**
 * 중복된 기사인지 판별
 * @param targetNewsId: 중복 체크 대상 뉴스 아이디
 * @param scrappedNewsList: 스크랩 리스트
 */
export const isDuplicatedNews = (
  targetNewsId: TNewsItem['newsId'],
  curNewsItems: TNewsItem[],
) => {
  if (!curNewsItems) return false;

  const isDuplicated = curNewsItems.find((item) => item.newsId === targetNewsId);
  return isDuplicated !== undefined;
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

/**
 * 검색 쿼리 문자열 생성
 * @param filterQueries: 검색 필터링 쿼리 객체
 * @returns 검색 쿼리 url 문자열
 */
export const createSearchUrlWithQueries = (filterQueries: Record<string, string | number>) => {
  const url = new URLSearchParams();
  const keys = Object.keys(filterQueries);

  keys.forEach((key) => {
    if (filterQueries[key]) {
      url.append(key, filterQueries[key].toString());
    }
  });

  return `?${url.toString()}`;
};

/**
 * Bing News API에서 가져온 데이터를 TNewsItem 형식으로 변환
 * - 중복 뉴스 제거
 * - 스크랩 데이터 사용하여 isScrapped 초기화
 * @param filterQueries: 검색 필터링 쿼리 객체
 * @param pageParam: 페이지 번호
 * @returns
 */
export async function fetchNewsListAndConvert(
  filterQueries: TBingNewsFilterQueries,
  pageParam: number,
) {
  const { keyword } = filterQueries;
  // api 호출
  const fetchResult = await fetchBingNews(keyword, pageParam);

  // 검색결과 없으면 not found 에러
  if (fetchResult.value.length === 0) {
    throw new APIError(ERRCODE.NEWS_FETCH_NOT_FOUND);
  }
  // 스크랩 목록
  const scrappedNewsList = queryClient.getQueryData<TNewsItem[]>(
    queryOptionsFactory.scrap.list('dd').queryKey,
  );
  // 현재 뉴스데이터
  const curNewsItems = getSearchQueryCache(filterQueries);
  // newsItem형식으로 변환
  const convertedNewsList = fetchResult.value
    .map((item) => {
      //@ts-ignore
      const isScrapped = setIsScrapped(item.name, scrappedNewsList);
      const datePublished = parseDateToFormat(item.datePublished);
      // 중복된 뉴스는 제거(중복된 뉴스 들어오는 경우 있음)
      const isDuplicated = isDuplicatedNews(item.name, curNewsItems);
      if (!isDuplicated) {
        return convertToNewsItem(item, datePublished, keyword, isScrapped);
      } else {
        return undefined;
      }
    })
    .filter(Boolean);
  return convertedNewsList;
}
