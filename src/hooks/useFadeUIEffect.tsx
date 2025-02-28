import { useCallback, useEffect, useRef } from 'react';

const useFadeUIEffect = (callback: () => void) => {
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    return () => {
      observer.current?.disconnect();
      observer.current = null;
    };
  }, []);

  const callbackRef = useCallback((target: HTMLElement) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
          observer.current?.unobserve(target);
        }
      });
    });

    if (target) {
      observer.current.observe(target);
    }
  }, []);

  return {
    ref: callbackRef,
  };
};

export default useFadeUIEffect;
