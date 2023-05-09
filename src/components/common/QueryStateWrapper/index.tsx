import { UseQueryResult } from '@tanstack/react-query';
import React from 'react';
import styled from 'styled-components';

interface IQueryStateWrapperProps {
  queryStates: UseQueryResult & { isEmpty: boolean };
  LoadingUI: React.ReactNode;
  ErrorUI: React.ReactNode;
  EmptyUI: React.ReactNode;
  children: React.ReactNode;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QueryStateWrapper = ({
  queryStates,
  LoadingUI,
  ErrorUI,
  EmptyUI,
  children,
}: IQueryStateWrapperProps) => {
  const { isLoading, isError, isEmpty } = queryStates;

  return (
    <Container>
      {isLoading && LoadingUI}
      {isError && ErrorUI}
      {isEmpty && EmptyUI}
      {isLoading || isError || isEmpty ? null : children}
    </Container>
  );
};

export default QueryStateWrapper;
