import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { setupServer } from 'msw/node';
import { composeStories } from '@storybook/react';
import MSWTest from './MSWTest';
import RootProviders from './RootProviders';
import * as MSWTestStories from './MSWTest.stories';
import { mswTestHandler } from '@/msw/handler/newsHandler';

/**
 * storybook에서 설정한 테스트 컴포넌트 그대로 단위테스트용으로 사용
 * - mock component 중복 사용문제 개선위해
 * */
const { Default } = composeStories(MSWTestStories);

const server = setupServer(mswTestHandler[0]);

// 모든 테스트 시작 전 실행
beforeAll(() => server.listen());

// 테스트 하나 종료 후 실행
afterEach(() => server.resetHandlers());

// 모든 테스트 종료 후 실행
afterAll(() => server.close());

const renderTest = () => {
  render(<Default />);
};

describe('MSWTest Component', () => {
  it('로딩 상태를 표시해야 함', () => {
    renderTest();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('데이터가 정상적으로 렌더링 되어야 함', async () => {
    renderTest();
    await waitFor(() => {
      expect(screen.getByText('테스트 글 제목 #1')).toBeInTheDocument();
      expect(screen.getByText('테스트 글 제목 #2')).toBeInTheDocument();
    });
  });

  // it('refetch 버튼 클릭 시 데이터를 다시 불러와야 함', async () => {
  //   renderTest();

  //   await waitFor(() => expect(screen.getByText('Test Post')).toBeInTheDocument());

  //   fireEvent.click(screen.getByRole('button', { name: 'refetch' }));

  //   await waitFor(() => expect(screen.getByText('Test Post')).toBeInTheDocument());
  // });
  //   renderWithQueryClient(<MSWTest />);
  //   await waitFor(() => expect(screen.getByText('Test Post')).toBeInTheDocument());
  // });

  // it('refetch 버튼 클릭 시 데이터를 다시 불러와야 함', async () => {
  //   renderWithQueryClient(<MSWTest />);

  //   await waitFor(() => expect(screen.getByText('Test Post')).toBeInTheDocument());

  //   fireEvent.click(screen.getByRole('button', { name: 'refetch' }));

  //   await waitFor(() => expect(screen.getByText('Test Post')).toBeInTheDocument());
  // });

  // it('API 에러 발생 시 에러 메시지를 표시해야 함', async () => {
  //   server.use(mswTestHandler[0]);

  //   renderWithQueryClient(<MSWTest />);

  //   await waitFor(() =>
  //     expect(screen.getByText(/Error: Network response was not ok/)).toBeInTheDocument(),
  //   );
  // });
});
