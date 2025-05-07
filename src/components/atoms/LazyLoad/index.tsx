'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * Lazy loading을 위한 컴포넌트
 * @param children
 */
export default function LazyLoad({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  console.log('inView', inView);
  return (
    <div className={cn('w-full', className)} ref={ref}>
      <>{inView ? children : null}</>
    </div>
  );
}
