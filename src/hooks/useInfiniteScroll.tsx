import { useCallback, useRef } from 'react';

interface UseInfiniteScrollProps {
  onTriggered: (...args: any) => any;
  options?: IntersectionObserverInit;
}

const useInfiniteScroll = ({ onTriggered, options = {} }: UseInfiniteScrollProps) => {
  const observer = useRef<IntersectionObserver>();

  const callbackRef = useCallback((node: HTMLElement) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onTriggered();
        }
      });
    }, options);

    if (node) observer.current.observe(node);
  }, []);

  return {
    ref: callbackRef,
  };
};

export default useInfiniteScroll;
