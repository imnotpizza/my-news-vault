import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { setupServer } from 'msw/node';
import { composeStories } from '@storybook/react';
import MSWTest from './MSWTest';
import { mswTestHandler } from '../../../mocks/handler/newsHandler';
import RootProviders from './RootProviders';

const server = setupServer(mswTestHandler[0]);

// 모든 테스트 시작 전 실행
beforeAll(() => server.listen());

// 테스트 하나 종료 후 실행
afterEach(() => server.resetHandlers());

// 모든 테스트 종료 후 실행
afterAll(() => server.close());

describe('MSWTest Component', () => {
  it('로딩 상태를 표시해야 함', () => {
    render(
      <RootProviders>
        <MSWTest />
      </RootProviders>,
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  // it('데이터가 정상적으로 렌더링 되어야 함', async () => {
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
