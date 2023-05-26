import Header from '@/components/header/Header';

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default RootLayout;
