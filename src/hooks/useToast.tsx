import ToastComponent from '@/components/common/Toast';
import React, { useState } from 'react';

const useToast = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openToast = () => {
    setIsOpen(true);
  };

  const closeToast = () => {
    setIsOpen(false);
  };

  const Toast = ({ message }) => {
    return <ToastComponent message={message} show={isOpen} setShow={setIsOpen} />;
  };

  return {
    openToast,
    closeToast,
    Toast,
  };
};

export default useToast;
