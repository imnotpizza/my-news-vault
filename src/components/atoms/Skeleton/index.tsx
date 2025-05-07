import { cn } from '@/lib/utils';
import React from 'react';

/**
 * Skeleton Slide UI 컴포넌트
 */
const SkeletonSlideUI = ({ className }: { className?: string }) => {
  return (
    <div className={cn('relative overflow-hidden bg-secondary rounded-md', className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-secondary animate-shimmer w-full h-full" />
    </div>
  );
};

/**
 * skeleton Box 컴포넌트
 * - Card, Inut 등등의 UI에 적합
 */
const Box = ({ className }: { className?: string }) => {
  return <SkeletonSlideUI className={cn('rounded-sm w-full h-4', className)} />;
};

/**
 * skeleton Circle 컴포넌트
 * - 프로필 등 원형 UI에 적합
 */
const Circle = ({ className }: { className?: string }) => {
  return <SkeletonSlideUI className={cn('w-[2.5rem] h-[2.5rem] rounded-full', className)} />;
};

/**
 * skeleton Container 컴포넌트
 */
const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden bg-primary rounded-lg flex flex-col gap-4 w-full h-auto p-6',
        className,
      )}
    >
      {children}
    </div>
  );
};

/**
 * Skeleton Loading UI 컴포넌트
 */
const Skeleton = {
  Box,
  Circle,
  Container,
};

export default Skeleton;
