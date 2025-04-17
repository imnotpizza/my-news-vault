import { Button } from '@/components/atoms/Button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '@/components/atoms/Dialog';
import LoginButton from '@/components/molecules/LoginButton';
import React, { useState } from 'react';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * 로그인 모달창
 */
function LoginDialogTemplate({ isOpen, onClose }: IProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(_isOpen) => !_isOpen && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>로그인</DialogTitle>
          <DialogDescription>로그인 후 서비스를 이용하세요</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <LoginButton onClick={onClose} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function OpenButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button>로그인</Button>
      <LoginDialogTemplate isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

LoginDialogTemplate.OpenButton = OpenButton;

export default LoginDialogTemplate;
