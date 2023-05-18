'use client';

import React, { memo, useState } from 'react';
import reactDom from 'react-dom';
import { styled } from 'styled-components';

const rootEl = document.getElementById('modal-root');

export const Portal = ({ children }) => {
  return reactDom.createPortal(children, rootEl);
};

const Container = styled.div`
  position: absolute;
  top: 100px;
  background-color: blue;
  width: 300px;
  height: 100px;
`;

const Toast = () => {
  const [show, setShow] = useState(true);

  const closeToast = () => {
    setShow(false);
  };

  if (!show) {
    return null;
  } else {
    return (
      <Container onClick={closeToast}>
        <div>ffefe</div>
      </Container>
    );
  }
};

export default memo(Toast);
