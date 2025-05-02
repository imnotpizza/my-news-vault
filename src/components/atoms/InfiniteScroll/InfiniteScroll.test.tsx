import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import InfiniteScroll from './index';
import { setupServer } from 'msw/node';
import { composeStories } from '@storybook/react';
import * as InfiniteScrollStories from './InfiniteScroll.stories';
import { mswTestHandler } from '@/msw/handler/newsHandler';

/**
 * storybook에서 설정한 테스트 컴포넌트 그대로 단위테스트용으로 사용
 * - mock component 중복 사용문제 개선위해
 * */
const { InfiniteScrollExample } = composeStories(InfiniteScrollStories);

const server = setupServer(mswTestHandler[0]);

// 모든 테스트 시작 전 실행
beforeAll(() => server.listen());

// 테스트 하나 종료 후 실행
afterEach(() => server.resetHandlers());

// 모든 테스트 종료 후 실행
afterAll(() => server.close());

describe('test', () => {
  it('InfiniteScroll 컴포넌트가 정상적으로 렌더링 되어야 함', async () => {
    render(<InfiniteScrollExample />);
    await waitFor(() => {
      expect(screen.getByText('Mock Title #1')).toBeInTheDocument();
      expect(screen.getByText('Mock Title #2')).toBeInTheDocument();
    });
  });
});
