import { useCallback, useEffect, useRef, useState } from 'react';

interface IUseInfiniteScrollParams {
  onTriggered: () => void;
  maxPage?: number;
}

const useInfiniteScroll = ({ onTriggered, maxPage = 1 }: IUseInfiniteScrollParams) => {
  const observer = useRef<IntersectionObserver>();
  const targetElement = useRef<Element>();
  const [, setCurPage] = useState<number>(1);

  useEffect(() => {
    return () => {
      targetElement.current = null;
      observer.current?.disconnect();
    };
  }, []);

  const callbackRef = useCallback((target: HTMLElement) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurPage((prevCurPage) => {
            if (prevCurPage < maxPage) {
              onTriggered();
            } else {
              observer.current?.unobserve(targetElement.current);
            }
            return prevCurPage + 1;
          });
        }
      });
    });

    if (target) {
      targetElement.current = target;
      observer.current.observe(target);
    }
  }, []);

  return {
    ref: callbackRef,
  };
};

export default useInfiniteScroll;
