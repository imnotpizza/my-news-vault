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
  width: 6.88rem;
  height: 6.88rem;
  border-radius: 3.44rem;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-weight: 300;
  font-size: 1.25rem;
  line-height: 2.56rem;
  color: #1a2254;
  margin-top: 2.25rem;
`;

interface IStatusUIProps {
  statusImage: React.ReactNode;
  text?: string;
}

const StatusUI = ({ statusImage, text }: IStatusUIProps) => {
  return (
    <Container>
      <StatusImage>{statusImage}</StatusImage>
      {text && <Text>{text}</Text>}
    </Container>
  );
};

export default StatusUI;
