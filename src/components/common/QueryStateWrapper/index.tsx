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

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

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

  return <Container>{getUIByState()}</Container>;
};

export default QueryStateWrapper;
