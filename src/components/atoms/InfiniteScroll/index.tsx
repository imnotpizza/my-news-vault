/**
 * @file: InfiniteScroll.tsx
 * @author: liam / liam@o2pluss.com
 * @since: 2024.12.13
 * @description: 무한스크롤 wrapper 컴포넌트
 */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps {
  enabled: boolean;
  onTriggered: (...args: any[]) => any;
  page: number;
  maxPage: number;
}

const options: IntersectionObserverInit = {
  threshold: 0,
};

/**
 * 무한스크롤 커스텀 훅
 * @param enabled 스크롤 활성화 여부
 * @param onTriggered target 교차 시 호출할 함수
 * @param page 현재 페이지
 */
export default function useInfiniteScroll({ enabled, onTriggered, page }: IProps) {
  const io = useRef<IntersectionObserver | null>(null);
  const [_state, _setState] = useState({
    enabled,
    page,
  });

  useEffect(() => {
    _setState({
      enabled,
      page,
    });
  }, [enabled, page]);

  const ref = useCallback((target: HTMLDivElement) => {
    if (!io.current) {
      io.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          _setState((_state) => {
            if (entry.isIntersecting && _state.enabled) {
              onTriggered(_state);
            }
            return _state;
          });
        });
      }, options);

      io.current.observe(target);
    }
  }, []);

  return ref;
}

export const InfiniteScrollWrapper = ({
  className,
  children,
  ioRef,
  height = 200,
  isLoading,
  LoadingUi = 'loading...',
}: {
  className?: string;
  children: React.ReactNode;
  ioRef: any;
  height?: number;
  isLoading?: boolean;
  LoadingUi?: React.ReactNode;
}) => {
  return (
    <div className={twMerge(className, 'ods-w-full ods-relative')}>
      {children}
      <div
        ref={ioRef}
        style={{
          height,
        }}
        className={twMerge(
          '!ods-absolute ods-w-full ods-bottom-0 ods-left-0 ods-flex ods-justify-center ods-items-center',
        )}
      ></div>
      {isLoading && (
        <div className="ods-flex ods-justify-center ods-items-center ods-p-8">{LoadingUi}</div>
      )}
    </div>
  );
};
