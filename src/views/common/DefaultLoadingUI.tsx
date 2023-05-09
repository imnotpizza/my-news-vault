import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const DefaultLoadingUI = () => {
  return (
      <Spin size="large" />
  );
};

export default DefaultLoadingUI;
