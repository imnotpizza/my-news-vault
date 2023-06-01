import { GetServerSideProps } from 'next';
import React from 'react';

const getTextByStatusCode = (statusCode) => {
  switch (statusCode) {
    case 404:
      return '페이지를 찾을 수 없습니다';
    default:
      return '실행 도중 문제가 발생하였습니다. 나중에 다시 시도해 주세요.';
  }
};

const ErrorPage = ({ statusCode }) => {
  return (
    <div>
      <div>error</div>
      <div>{getTextByStatusCode(statusCode)}</div>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res }) => {
  const { statusCode } = res.statusCode;
  return { statusCode };
};

export default ErrorPage;
