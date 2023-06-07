import Header from '@/components/header/Header';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-width: 360px;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RootLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <BodyContainer>{children}</BodyContainer>
    </LayoutContainer>
  );
};

export default RootLayout;
