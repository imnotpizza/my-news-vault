import withTestProviders from '@/components/providers/withTestProviders';
import { cleanup, render, screen } from '@testing-library/react';
import { mockPageProps } from '@/utils/mockData';
import { server } from '@/msw/server';
import { queryClient } from '@/queries/queryClient';
import { DEFAULT_MOCK_QUERY, getBingNewsSearchMswHandler } from '@/msw/handlers/bingNewsSearch';
import NewsSearchPage from '.';

describe('검색어가 없을 경우 (로그인, 비로그인 공통)', () => {
  const mockProps = {
    ...mockPageProps,
    query: '',
  };
  beforeEach(() => {
    render(withTestProviders(NewsSearchPage, mockProps));
  });
  afterEach(() => {
    cleanup();
  });

  it('검색어 입력창 표시', () => {
    const input = screen.getByPlaceholderText('검색어를 입력해주세요');
    expect(input).toBeInTheDocument();
  });
  it('검색어를 입력해주세요. 문구 표시', () => {
    const searchInput = screen.getByText('검색어가 입력되지 않았습니다.');
    expect(searchInput).toBeInTheDocument();
  });
  it('뉴스 카드 없어야 함', () => {
    const newsCard = screen.queryByTestId('news-card-ui');
    expect(newsCard).not.toBeInTheDocument();
  });
});

describe('검색어 입력한 경우', () => {
  beforeEach(() => {
    render(withTestProviders(NewsSearchPage, mockPageProps));
  });
  afterEach(() => {
    queryClient.clear();
    cleanup();
  });

  it('검색결과 20개 전부 나오는 지 확인', async () => {
    // loading ui 표시 확인
    const loadingUi = screen.getByTestId('loading-ui');
    expect(loadingUi).toBeInTheDocument();
    // 뉴스 카드 20개 표시 확인
    const newsCard = await screen.findAllByTestId('news-card-ui');
    expect(newsCard).toHaveLength(20);
  });
});

describe('검색 도중 에러 발생하였을 때', () => {
  afterEach(() => {
    queryClient.clear();
    cleanup();
  });
  it('기본 에러 UI 보여주기', async () => {
    server.use(
      getBingNewsSearchMswHandler(DEFAULT_MOCK_QUERY, (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: 'error' }));
      }),
    );
    render(withTestProviders(NewsSearchPage, mockPageProps));
    const errorUi = await screen.findByTestId('error-ui');
    expect(errorUi).toBeInTheDocument();
    const newsCard = screen.queryByTestId('news-card-ui');
    expect(newsCard).not.toBeInTheDocument();
  });
});
