import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import InfiniteScroll from './index';
import { setupServer } from 'msw/node';
import { composeStories } from '@storybook/react';
import * as InfiniteScrollStories from './InfiniteScroll.stories';
import { mswTestHandler } from '@/msw/handler/newsHandler';

// jest.setup.ts
class MockIntersectionObserver {
  callback: IntersectionObserverCallback;
  elements: Element[] = [];

  constructor(cb: IntersectionObserverCallback) {
    this.callback = cb;
    setTimeout(() => {
      // 콜백 강제로 실행
      cb([
        {
          isIntersecting: true,
          target: this.elements[0],
        },
      ] as any[]);
    }, 100);
  }

  observe(el: Element) {
    this.elements.push(el);
  }

  unobserve(el: Element) {
    this.elements = this.elements.filter((e) => e !== el);
  }

  disconnect() {
    this.elements = [];
  }

  // 테스트 내에서 호출할 helper
  triggerAll(entries: Partial<IntersectionObserverEntry>[]) {
    const list = entries.map((e) => ({
      isIntersecting: false,
      target: this.elements[0],
      ...e,
    })) as IntersectionObserverEntry[];
    this.callback(list, this);
  }
}

jest.spyOn(window, 'IntersectionObserver').mockImplementation((cb) => {
  const observer = new MockIntersectionObserver(cb);
  return observer as unknown as IntersectionObserver;
});

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
