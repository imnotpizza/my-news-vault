import React from 'react';
import styled from 'styled-components';

interface IQueryStateWrapperProps {
  isLoading: boolean;
  isError: boolean;
  isNone: boolean;
  children: React.ReactNode;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QueryStateWrapper = ({ isLoading, isError, isNone, children }: IQueryStateWrapperProps) => {
  return (
    <Container>
      {isLoading && <div>로딩중</div>}
      {isError && <div>에러</div>}
      {isNone && <div>데이터 없음</div>}
      {children}
    </Container>
  );
};

export default QueryStateWrapper;
