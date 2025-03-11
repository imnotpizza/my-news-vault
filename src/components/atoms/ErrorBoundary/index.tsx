'use client';

import ERRCODE from '@/constants/errCode';
import { useToast } from '@/hooks/useToast';
import APIError from '@/utils/APIError';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import React from 'react';
import { ErrorBoundary as EBoundary } from 'react-error-boundary';
import { twMerge } from 'tailwind-merge';
import SearchErrorIcon from '@/assets/search-error-icon.svg';
import SearchNoneIcon from '@/assets/search-none-icon.svg';

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
 * TODO: 서비스별로 UI / fallback 등 분리
 */
export default function ErrorBoundary({
  fallbackContent = () => (
    <div role="status" className="w-full h-[70vh] flex justify-center items-center grow">
      일시적인 문제가 발생하였습니다
    </div>
  ),
  onError,
  children,
  className,
}: IProps) {
  const { toast } = useToast();
  const [fallbackIcon, setFallbackIcon] = React.useState<React.ReactNode | null>(null);

  const setFallbackIconByErrCode = (errCode: ERRCODE) => {
    switch (errCode) {
      case ERRCODE.NEWS_FETCH_FAILED:
        setFallbackIcon(SearchErrorIcon);
        break;
      case ERRCODE.NEWS_FETCH_NOT_FOUND:
        setFallbackIcon(SearchNoneIcon);
        break;
      default:
        setFallbackIcon(SearchErrorIcon);
        break;
    }
  };

  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <EBoundary
          onReset={reset}
          fallbackRender={(props) => (
            <div className={twMerge('w-full h-full flex-center', className)}>
              {fallbackIcon || '일시적인 문제가 발생하였습니다.'}
            </div>
          )}
          onError={(e) => {
            if (e instanceof APIError) {
              setFallbackIconByErrCode(e.errCode);
              toast({
                description: e.msgFromCode,
              });
            } else {
              toast({
                description: '일시적인 문제가 발생하였습니다',
              });
            }
          }}
        >
          {children}
        </EBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
