import { useCallback, useEffect, useRef, useState } from 'react';

const useInfiniteScroll = () => {
  const observer = useRef<IntersectionObserver>();
  const targetElement = useRef<Element>();
  const [isIntersecting, setIsIntersecting] = useState(false);

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
          setIsIntersecting(true);
        } else {
          setIsIntersecting(false);
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
    isIntersecting,
  };
};

export default useInfiniteScroll;
