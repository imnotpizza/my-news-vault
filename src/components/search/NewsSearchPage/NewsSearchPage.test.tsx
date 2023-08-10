import withTestProviders from '@/components/providers/withTestProviders';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { TBingNewsQuery, TUserInfo } from '@/types';
import { IUserInfoContext } from '@/utils/userInfoProvider';
import { server } from '@/msw/server';
import { queryClient } from '@/queries/queryClient';
import { getMswRestHandler } from '@/msw/handlers';
import NewsSearchPage from '.';

// 모든 테스트 시작 전 실행
beforeAll(() => server.listen());

// 테스트 하나 종료 후 실행
afterEach(() => server.resetHandlers());

// 모든 테스트 종료 후 실행
afterAll(() => server.close());

jest.mock('../../../firebase', () => {
  return {
    database: jest.fn(),
    auth: jest.fn(),
    googleProvider: jest.fn(),
  };
});

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    query: {
      query: '테스트검색',
    },
  }),
}));

// @ts-ignore
window.IntersectionObserver = jest.fn(() => ({
  observe: () => {},
  unobserve: () => {},
  disconnect: () => {},
}));

const mockProps: {
  userInfo: IUserInfoContext;
  query: TBingNewsQuery['query'];
} = {
  query: '',
  userInfo: {
    setUserInfo: jest.fn(),
    isSignin: false,
    userInfo: null,
  },
};

describe('검색어가 없을 경우 (로그인, 비로그인 공통)', () => {
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
    render(withTestProviders(NewsSearchPage, { ...mockProps, query: 'mock' }));
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
      getMswRestHandler((req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: 'error' }));
      }),
    );
    render(withTestProviders(NewsSearchPage, { ...mockProps, query: 'mock' }));
    const errorUi = await screen.findByTestId('error-ui');
    expect(errorUi).toBeInTheDocument();
    const newsCard = screen.queryByTestId('news-card-ui');
    expect(newsCard).not.toBeInTheDocument();
  });
});
