'use client';

import { useToast } from '@/hooks/useToast';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import React from 'react';
import { ErrorBoundary as EBoundary } from 'react-error-boundary';
import { twMerge } from 'tailwind-merge';

interface IProps {
  fallbackContent?: (props: { resetErrorBoundary: () => void }) => React.ReactElement;
  children: React.ReactNode;
  onError?: (error: unknown) => void;
  className?: string;
}

/**
 * react-query ErrorBoundary Wrapper 컴포넌트
 * @param {function} fallbackRender - retry 실행기능 포함된 컴포넌트 리턴 함수
 * @param {React.ReactNode} children - 에러 감쌀 컴포넌트
 */
export default function ErrorBoundary({
  fallbackContent = () => (
    <div role="status" className="w-full h-[70vh] flex justify-center items-center grow">
      {/* 일시적인 문제가 발생하였습니다 */}
    </div>
  ),
  onError,
  children,
  className,
}: IProps) {
  const { toast } = useToast();
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <EBoundary
          onReset={reset}
          fallbackRender={(props) => (
            <div className={twMerge('w-full h-full flex-center', className)}>
              {fallbackContent(props)}
            </div>
          )}
          onError={() => {
            // TODO: 지역 에러처리는 여기서
            toast({
              description: '데이터를 불러오는 중 문제가 발생했습니다.',
            });
          }}
        >
          {children}
        </EBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
