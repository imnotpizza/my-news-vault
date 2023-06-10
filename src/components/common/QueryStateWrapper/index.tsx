import DefaultEmptyUI from '@/views/searchStatus/DefaultEmptyUI';
import DefaultErrorUI from '@/views/searchStatus/DefaultErrorUI';
import DefaultLoadingUI from '@/views/searchStatus/DefaultLoadingUI';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';

export interface IQueryStateWrapperProps {
  isLoading: boolean;
  isError: boolean;
  isEmpty: boolean;
  // eslint-disable-next-line
  LoadingUI?: (...args: any[]) => React.ReactElement;
  // eslint-disable-next-line
  ErrorUI?: (...args: any[]) => React.ReactElement;
  // eslint-disable-next-line
  EmptyUI?: (...args: any[]) => React.ReactElement;
  children: React.ReactNode;
}

const StatusContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 75vh;
  position: absolute;
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
      return (
        <StatusContainer>
          <LoadingUI />
        </StatusContainer>
      );
    } else if (isError) {
      return (
        <StatusContainer>
          <ErrorUI />
        </StatusContainer>
      );
    } else if (isEmpty) {
      return (
        <StatusContainer>
          <EmptyUI />
        </StatusContainer>
      );
    } else {
      return children;
    }
  };

  return <ErrorBoundary fallback={<DefaultErrorUI />}>{getUIByState()}</ErrorBoundary>;
};

export default QueryStateWrapper;
