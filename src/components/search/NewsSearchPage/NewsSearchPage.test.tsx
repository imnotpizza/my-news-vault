import withTestProviders from '@/components/providers/withTestProviders';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import NewsSearchPage from '.';
import { TBingNewsQuery, TUserInfo } from '@/types';
import { IUserInfoContext } from '@/utils/userInfoProvider';
import { server } from '@/msw/server';
import { rest } from 'msw';
import { queryClient } from '@/queries/queryClient';
import { getMswRestHandler } from '@/msw/handlers';

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

describe('로그인, 비로그인 공통', () => {
  beforeEach(() => {
    render(withTestProviders(NewsSearchPage, mockProps));
  });
  afterEach(() => {
    cleanup();
  });
  describe('검색어가 없을 경우', () => {
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
});

describe('검색어 입력시', () => {
  beforeEach(() => {
    render(withTestProviders(NewsSearchPage, { ...mockProps, query: 'mock' }));
  });
  afterEach(() => {
    queryClient.clear();
    cleanup();
  });

  it('검색시 결과값 제대로 나오는지 확인', async () => {
    // loading ui 표시 확인
    const loadingUi = screen.getByTestId('loading-ui');
    expect(loadingUi).toBeInTheDocument();
    // 뉴스 카드 20개 표시 확인
    const newsCard = await screen.findAllByTestId('news-card-ui');
    expect(newsCard).toHaveLength(20);
  });
});

describe('검색 중 문제 발생시', () => {
  afterEach(() => {
    queryClient.clear();
    cleanup();
  });
  it('에러 UI 표시', async () => {
    server.use(
      getMswRestHandler((req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: 'error' }));
      }),
    );
    render(withTestProviders(NewsSearchPage, { ...mockProps, query: 'mock' }));
    const errorUi = await screen.findByTestId('error-ui');
    expect(errorUi).toBeInTheDocument();
    // 뉴스 카드 없어야 함
    const newsCard = screen.queryByTestId('news-card-ui');
    expect(newsCard).not.toBeInTheDocument();
  });
});

describe('스크랩 기능', () => {
  beforeEach(() => {
    render(withTestProviders(NewsSearchPage, { ...mockProps, query: 'mock' }));
  });
  afterEach(() => {
    queryClient.clear();
    cleanup();
  });

  it('스크랩 버튼 클릭시 스크랩 추가', async () => {
    const newsCards = await screen.findAllByTestId('news-card-ui');
    const scrapButton = within(newsCards[0]).getByLabelText('스크랩 추가 버튼');
    fireEvent.click(scrapButton);
  });
  it('스크랩 버튼 클릭시 스크랩 삭제', async () => {
    
  });
});
