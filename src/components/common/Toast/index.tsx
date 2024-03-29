import { TOAST_DURATION } from '@/constants';
import React, { memo, useEffect, useRef } from 'react';
import reactDom from 'react-dom';
import styled from 'styled-components';

let rootEl = null;

if (typeof document !== 'undefined') {
  // root element
  rootEl = document.getElementById('modal-root');
}

export const Portal = ({ children }) => {
  return reactDom.createPortal(children, rootEl);
};

const Container = styled.div`
  position: fixed;
  top: 4.38rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 0.63rem 1.25rem;
  border-radius: 0.25rem;
  opacity: 0.9;
  z-index: 9999;
  cursor: pointer;
  & > p {
    color: white;
    font-size: 1rem;
  }
`;

const Toast = ({ message, show, setShow }) => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (show) {
      timer.current = setTimeout(() => {
        setShow(false);
      }, TOAST_DURATION);
    }

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [show, setShow]);

  const closeToast = () => {
    setShow(false);
    if (timer.current) clearTimeout(timer.current);
  };

  if (!show) {
    return <div>hide</div>;
  } else {
    return (
      <Portal>
        <Container onClick={closeToast}>
          <p>{message}</p>
        </Container>
      </Portal>
    );
  }
};

export default memo(Toast);
