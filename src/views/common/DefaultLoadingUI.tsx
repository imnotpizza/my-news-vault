import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: green;
`;

const CircleWhite = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 55px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-weight: 300;
  font-size: 28px;
  line-height: 41px;
  color: #1a2254;
  margin-top: 36px;
`;

const DefaultLoadingUI = () => {
  return <Container>
    <CircleWhite />
    <Text>검색 중...</Text>
  </Container>;
};

export default DefaultLoadingUI;
