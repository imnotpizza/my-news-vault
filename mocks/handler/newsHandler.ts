import { FETCH_NEWS_COUNT_PER_PAGE } from '@/constants';
import { mockBingNewsRes, mockScarpNewsList } from '@/mock';
import { HttpResponse, http } from 'msw';

// JSONPlaceholder API를 모킹하기 위한 MSW 핸들러 예시
export default [
  // 모든 게시글 조회
  http.get('https://jsonplaceholder.typicode.com/posts', ({ params }) => {
    const mockPosts = [
      { userId: 1, id: 1, title: '테스트 글 제목 #1', body: '내용 예시 #1' },
      { userId: 2, id: 2, title: '테스트 글 제목 #2', body: '내용 예시 #2' },
    ];
    return HttpResponse.json(mockPosts);
  }),
  // fetchBingNews
  http.get(
    `${
      process.env.NEXT_PUBLIC_BING_API_BASEURL
    }/news/search?mkt=en-us&q=${'test'}&count=${FETCH_NEWS_COUNT_PER_PAGE}&offset=${'offset'}`,
    ({ params, request }) => {
      // status 200
      return HttpResponse.json(mockBingNewsRes, {
        status: 200,
      });
    },
  ),

  // TODO: BE 확정되면 개선
  // fetchScrappedList
  http.get(`/scrap/1/scrap`, ({ params, request }) => {
    return HttpResponse.json(mockScarpNewsList, {
      status: 200,
    });
  }),

  // TODO: BE 확정되면 개선
  // scrapNews
  http.patch(`scrap/1/scrap`, () => {
    return HttpResponse.json(null, {
      status: 201,
    });
  }),

  // TODO: BE 확정되면 개선
  // unscrapNews
  http.delete(`scrap/1/scrap`, () => {
    return HttpResponse.json(null, {
      status: 201,
    });
  }),
];
