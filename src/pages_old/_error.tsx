import React from 'react';
import styled from 'styled-components';
import Layout from '@/components/layout';
import DefaultErrorUI from '@/views/searchStatus/DefaultErrorUI';

const getTextByStatusCode = (statusCode) => {
  switch (statusCode) {
    case 404:
      return '페이지를 찾을 수 없습니다';
    default:
      return '실행 도중 문제가 발생하였습니다. 나중에 다시 시도해 주세요.';
  }
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ErrorUIBox = styled.div`
  width: 100%;
  height: 11.25rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ErrorPage = ({ statusCode }) => {
  return (
    <Layout>
      <Container>
        <ErrorUIBox className='flex-center'>
          <DefaultErrorUI errText={getTextByStatusCode(statusCode)} />
        </ErrorUIBox>
      </Container>
    </Layout>
  );
};

ErrorPage.getInitialProps = ({ res }) => {
  const { statusCode } = res;
  return { statusCode };
};

export default ErrorPage;
