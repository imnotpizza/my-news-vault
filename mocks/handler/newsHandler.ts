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
  

  // fetchScrappedList

  // scrapNews

  // unscrapNews
];
