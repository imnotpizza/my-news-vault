import DefaultEmptyUI from '@/views/searchStatus/DefaultEmptyUI';
import DefaultErrorUI from '@/views/searchStatus/DefaultErrorUI';
import DefaultLoadingUI from '@/views/searchStatus/DefaultLoadingUI';
import React from 'react';
import styled from 'styled-components';

interface IQueryStateWrapperProps {
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

// FIXME: error-boundary 적용
const QueryStateWrapper = ({
  isLoading,
  isError,
  isEmpty,
  LoadingUI = DefaultLoadingUI,
  ErrorUI = DefaultErrorUI,
  EmptyUI = DefaultEmptyUI,
  children,
}: IQueryStateWrapperProps) => {
  return (
    <Container>
      {isLoading && <LoadingUI />}
      {isError && <ErrorUI />}
      {isEmpty && <EmptyUI />}
      {/* prettier-ignore */}
      {!isLoading && !isError && !isEmpty && children}
    </Container>
  );
};

export default QueryStateWrapper;
