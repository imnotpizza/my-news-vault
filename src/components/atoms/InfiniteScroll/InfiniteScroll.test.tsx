import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import InfiniteScroll from './index';
import { setupServer } from 'msw/node';
import { composeStories } from '@storybook/react';
import * as InfiniteScrollStories from './InfiniteScroll.stories';
import { mswTestHandler } from '@/msw/handler/newsHandler';

// jest.setup.ts
// FIXME: CALL_COUNT static 사용 제거 (여러개 사용시 문제발생)
class MockIntersectionObserver {
  callback: IntersectionObserverCallback;
  elements: Element[] = [];
  // onTriggered 호출될 횟수
  static CALL_COUNT = 1;

  constructor(cb: IntersectionObserverCallback) {
    this.callback = cb;
    this.scrollTrigger();
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

  // scroll 시 실행되는 callback 강제호출
  scrollTrigger() {
    let triggerCount = 0;
    const intervalId = setInterval(() => {
      if (triggerCount >= MockIntersectionObserver.CALL_COUNT) {
        clearInterval(intervalId);
        return;
      }
      this.callback([
        {
          isIntersecting: true,
        },
      ] as any[]);
      triggerCount++;
    }, 200);
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

describe('기본 테스트', () => {
  it('InfiniteScroll 컴포넌트가 정상적으로 렌더링 되어야 함', async () => {
    render(<InfiniteScrollExample />);

    await waitFor(() => {
      expect(screen.getByText('Mock Title #1')).toBeInTheDocument();
      expect(screen.getByText('Mock Title #2')).toBeInTheDocument();
      expect(screen.queryAllByTestId('post-card')).toHaveLength(10);
    });
  });

  it('추가 스크롤 시 추가 데이터 호출', async () => {
    render(<InfiniteScrollExample />);
    MockIntersectionObserver.CALL_COUNT = 2; // IO 2번 trigger 시키기
    await waitFor(async () => {
      expect(screen.getByText('Mock Title #1')).toBeInTheDocument();
      expect(screen.getByText('Mock Title #2')).toBeInTheDocument();
      expect(screen.getByText('Mock Title #19')).toBeInTheDocument();
      expect(screen.getByText('Mock Title #20')).toBeInTheDocument();
      expect(screen.getAllByTestId('post-card')).toHaveLength(20);
    });
  });
});
