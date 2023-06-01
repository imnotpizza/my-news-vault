import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const DefaultLoadingUI = () => {
  return (
      <div>Loading.....</div>
  );
};

export default DefaultLoadingUI;
