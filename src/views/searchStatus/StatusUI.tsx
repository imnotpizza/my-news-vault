import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StatusImage = styled.div`
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

const StatusUI = ({ statusImage, text }) => {
  return (
    <Container>
      <StatusImage>{statusImage}</StatusImage>
      <Text>{text}</Text>
    </Container>
  );
};

export default StatusUI;
