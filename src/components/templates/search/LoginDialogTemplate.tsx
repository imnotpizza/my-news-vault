import { Button } from '@/components/atoms/Button';
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '@/components/atoms/Dialog';
import LoginButton from '@/components/molecules/LoginButton';
import React from 'react';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * 로그인 모달창
 */
export default function LoginTemplate({ isOpen, onClose }: IProps) {
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
