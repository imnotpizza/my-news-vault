import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { server } from '@/msw/server';
import useBingNewsFetch from '.';

// 모든 테스트 시작 전 실행
beforeAll(() => server.listen());

// 테스트 하나 종료 후 실행
afterEach(() => server.resetHandlers());

// 모든 테스트 종료 후 실행
afterAll(() => server.close());

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    query: {
      query: '테스트검색',
    },
  }),
}));

describe('useBingNewsFetch', () => {
  describe('enabled 테스트', () => {
    it('enabled false이면 쿼리데이터 저장 안함', () => {});
    it('enabled true이면 쿼리데이터 초기화', () => {});
  });
  describe('쿼리데이터 API 호출 시 테스트', () => {
    it('정상호출 시, flattenData에 데이터 정상출력', () => {});
    it('검색결과 없을때, isEmpty true로 출력', () => {});
    it('에러 발생 시, queryStates.isError true', () => {});
  });
});
