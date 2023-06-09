import DefaultEmptyUI from '@/views/searchStatus/DefaultEmptyUI';
import DefaultErrorUI from '@/views/searchStatus/DefaultErrorUI';
import DefaultLoadingUI from '@/views/searchStatus/DefaultLoadingUI';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export interface IQueryStateWrapperProps {
  isLoading: boolean;
  isError: boolean;
  isEmpty: boolean;
  LoadingUI?: (...args: any[]) => React.ReactElement;
  ErrorUI?: (...args: any[]) => React.ReactElement;
  EmptyUI?: (...args: any[]) => React.ReactElement;
  children: React.ReactNode;
}

const QueryStateWrapper = ({
  isLoading,
  isError,
  isEmpty,
  LoadingUI = DefaultLoadingUI,
  ErrorUI = DefaultErrorUI,
  EmptyUI = DefaultEmptyUI,
  children,
}: IQueryStateWrapperProps) => {
  const getUIByState = () => {
    if (isLoading) {
      return <LoadingUI />;
    } else if (isError) {
      return <ErrorUI />;
    } else if (isEmpty) {
      return <EmptyUI />;
    } else {
      return children;
    }
  };

  return <ErrorBoundary fallback={<DefaultErrorUI />}>{getUIByState()}</ErrorBoundary>;
};

export default QueryStateWrapper;
