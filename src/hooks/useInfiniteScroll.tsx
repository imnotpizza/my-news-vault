import { useCallback, useRef } from 'react';

interface UseInfiniteScrollProps {
  onTriggered: () => any;
}

const useInfiniteScroll = ({ onTriggered }: UseInfiniteScrollProps) => {
  const observer = useRef<IntersectionObserver>();

  const callbackRef = useCallback((node: HTMLElement) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onTriggered();
        }
      });
    });

    if (node) observer.current.observe(node);
  }, [onTriggered]);

  return {
    ref: callbackRef,
  };
};

export default useInfiniteScroll;
