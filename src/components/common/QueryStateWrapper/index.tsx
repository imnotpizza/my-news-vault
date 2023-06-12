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
  isDisabled?: boolean;
  LoadingUI?: (...args: any[]) => React.ReactElement;
  ErrorUI?: (...args: any[]) => React.ReactElement;
  EmptyUI?: (...args: any[]) => React.ReactElement;
  DisabledUI?: (...args: any[]) => React.ReactElement;
  children: React.ReactNode;
}

const StatusContainer = styled.div`
  width: 100%;
  margin-top: 75vh;
  position: absolute;
`;

const QueryStateWrapper = ({
  isLoading,
  isError,
  isEmpty,
  isDisabled = false,
  LoadingUI = DefaultLoadingUI,
  ErrorUI = DefaultErrorUI,
  EmptyUI = DefaultEmptyUI,
  DisabledUI = DefaultEmptyUI,
  children,
}: IQueryStateWrapperProps) => {
  const getUIByState = () => {
    if (isLoading) {
      return (
        <StatusContainer className="flex-center">
          <LoadingUI />
        </StatusContainer>
      );
    } else if (isDisabled) {
      return (
        <StatusContainer className="flex-center">
          <DisabledUI />
        </StatusContainer>
      );
    } else if (isError) {
      return (
        <StatusContainer className="flex-center">
          <ErrorUI />
        </StatusContainer>
      );
    } else if (isEmpty) {
      return (
        <StatusContainer className="flex-center">
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
