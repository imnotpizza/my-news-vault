import withTestProviders from '@/components/providers/withTestProviders';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import NewsSearchPage from '.';
import { TBingNewsQuery, TUserInfo } from '@/types';
import { IUserInfoContext } from '@/utils/userInfoProvider';

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
