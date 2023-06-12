import { useCallback, useEffect, useRef } from 'react';

interface UseInfiniteScrollProps {
  onTriggered: () => any;
}

const useInfiniteScroll = ({ onTriggered }: UseInfiniteScrollProps) => {
  const observer = useRef<IntersectionObserver>();
  const targetElement = useRef<Element>();

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
          onTriggered();
        }
      });
    });

    if (target) {
      targetElement.current = target;
      observer.current.observe(target);
    }
  }, []);

  const unobserve = () => {
    if (targetElement.current) {
      observer.current?.unobserve(targetElement.current);
    }
  };

  return {
    ref: callbackRef,
    unobserve,
  };
};

export default useInfiniteScroll;
