import { FETCH_NEWS_COUNT_PER_PAGE } from '@/constants';
import { mockBingNewsRes, mockScarpNewsList } from '@/mock';
import { HttpResponse, http } from 'msw';

export const mswTestHandler = [
  // 모든 게시글 조회
  http.get('https://jsonplaceholder.typicode.com/posts', ({ request }) => {
    const url = new URL(request.url);
    console.log('###########################################1111111');
    // _page, _limit 쿼리파라미터로 받아와서 Mock 데이터 생성
    const page = Number(url.searchParams.get('_page')) || 1;
    const limit = Number(url.searchParams.get('_limit')) || 10;
    const mockPosts = generateMockPosts(page, limit);
    return HttpResponse.json(mockPosts, {
      status: 200,
    });
  }),
];

// JSONPlaceholder API를 모킹하기 위한 MSW 핸들러 예시
export default [
  // fetchBingNews
  http.get(
    `https://api.bing.microsoft.com/v7.0/news/search?mkt=en-us&q=&count=20&offset=0`,
    ({ params, request }) => {
      console.log('######################### mock called');
      // status 200
      return HttpResponse.json(mockBingNewsRes, {
        status: 200,
      });
    },
  ),

  // TODO: BE 확정되면 개선
  // fetchScrappedList
  http.get(`/api/scrap`, ({ params, request }) => {
    return HttpResponse.json(mockScarpNewsList, {
      status: 200,
    });
  }),

  // TODO: BE 확정되면 개선
  // scrapNews
  http.patch(`/api/scrap`, () => {
    return HttpResponse.json(
      { data: 'success from msw' },
      {
        status: 201,
      },
    );
  }),

  // TODO: BE 확정되면 개선
  // unscrapNews
  http.delete(`/api/scrap`, () => {
    return HttpResponse.json(
      { data: 'success from msw' },
      {
        status: 201,
      },
    );
  }),
];

function generateMockPosts(page: number, limit = 10) {
  const startId = (page - 1) * limit + 1;

  return Array.from({ length: limit }, (_, index) => {
    const id = startId + index;
    return {
      userId: Math.ceil(id / 5), // 예: 5개 포스트마다 userId 하나씩 올리기
      id,
      title: `Mock Title #${id}`, // `Mock Title #1`, `#2`, ...
      body: `This is the body of mock post #${id}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    };
  });
}
