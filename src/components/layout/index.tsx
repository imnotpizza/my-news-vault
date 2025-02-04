import Header from '@/components/templates/common/Header';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-width: 22.5rem;
`;

const BodyContainer = styled.div`
  width: 100%;
  height: calc(100vh - 4.5rem);
`;

const RootLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <BodyContainer className='flex-column'>{children}</BodyContainer>
    </LayoutContainer>
  );
};

export default RootLayout;
