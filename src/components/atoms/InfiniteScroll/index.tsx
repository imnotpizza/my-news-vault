import React, {
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps {
  enabled: boolean;
  onTriggered: (...args: any[]) => any;
  page: number;
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

interface InfiniteScrollWrapperProps {
  className?: string;
  children: React.ReactNode;
  thresholdHeight?: number;
  isLoading?: boolean;
  loadingUI?: React.ReactNode;
}

/**
 * infinite scroll wrapper 컴포넌트
 * - useInfiniteScroll 사용할 리스트를 다음 컴포넌트로 감싸 사용
 * @params className: style
 * @params children: 들어갈 컨텐츠
 * @params thresholdHeight: threshold(IntersectionObserver에의해 관찰되는 element)의 height값,
 * @params isLoading: 로딩 상태
 * @params loadingUI: 로딩 UI
 *
 */
export const InfiniteScrollWrapper = forwardRef(
  (
    {
      className,
      children,
      thresholdHeight = 200,
      isLoading,
      loadingUI = <div>loading...</div>,
    }: InfiniteScrollWrapperProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div className={twMerge(className, 'w-full relative')}>
        {children}
        <div
          ref={ref}
          style={{
            height: thresholdHeight,
          }}
          className={twMerge(
            '!absolute w-full bottom-0 left-0 flex justify-center items-center',
          )}
        ></div>
        {isLoading && (
          <div className="flex justify-center items-center p-8">
            {loadingUI}
          </div>
        )}
      </div>
    );
  },
);
