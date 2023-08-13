import { server } from '@/msw/server';
import '@testing-library/jest-dom/extend-expect';

// 모든 테스트 시작 전 실행
beforeAll(() => server.listen());

// 테스트 하나 종료 후 실행
afterEach(() => server.resetHandlers());

// 모든 테스트 종료 후 실행
afterAll(() => server.close());

// firebase mock
jest.mock('./src/firebase', () => {
  return {
    database: jest.fn(),
    auth: jest.fn(),
    googleProvider: jest.fn(),
  };
});

// next/router mock
jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    query: {
      query: '테스트검색',
    },
  }),
}));
