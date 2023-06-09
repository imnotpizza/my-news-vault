import React from 'react';
import styled from 'styled-components';

export const RoundUICover = styled.div`
  width: 6.88rem;
  height: 6.88rem;
  border-radius: 3.44rem;
  background: ${(p) => p.theme.White};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: yellow;
  width: 100vw;
  height: 80vh;
  top: 0;
  z-index: 500;
`;

const Text = styled.p`
  font-weight: 300;
  font-size: 1.25rem;
  line-height: 2.56rem;
  color: ${(p) => p.theme.Navy.Default};
  margin-top: 2.25rem;
`;

interface IStatusUIProps {
  statusImage: React.ReactNode;
  text?: string;
}

const StatusUI = ({ statusImage, text }: IStatusUIProps) => {
  return (
    <Container>
      {statusImage}
      {text && <Text>{text}</Text>}
    </Container>
  );
};

export default StatusUI;
