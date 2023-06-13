import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  font-weight: 500;
  font-size: 1.06rem;
`;

const ScrapCountView = ({ children }: { children: number }) => {
  return <Text>총 스크랩 수: {children || 0}개</Text>;
};

export default ScrapCountView;
