import DefaultEmptyUI from '@/views/searchStatus/DefaultEmptyUI';
import DefaultErrorUI from '@/views/searchStatus/DefaultErrorUI';
import DefaultLoadingUI from '@/views/searchStatus/DefaultLoadingUI';
import React from 'react';
import styled from 'styled-components';

export interface IQueryStateWrapperProps {
  isLoading: boolean;
  isError: boolean;
  isEmpty: boolean;
  LoadingUI?: () => React.ReactElement;
  ErrorUI?: () => React.ReactElement;
  EmptyUI?: () => React.ReactElement;
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

  return <>{getUIByState()}</>;
};

export default QueryStateWrapper;
