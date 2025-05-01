import { Button } from '@/components/atoms/Button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from '@/components/atoms/Dialog';
import LoginButton from '@/components/molecules/LoginButton';
import React, { useState } from 'react';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * 로그인 모달창
 */
function LoginDialogTemplate({ isOpen, setIsOpen }: IProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button onClick={() => setIsOpen(true)}>로그인</Button>
      <DialogContent className="justify-center min-h-[15rem]">
        <DialogHeader className="justify-center gap-4">
          <DialogTitle className="justify-center text-center">로그인</DialogTitle>
        </DialogHeader>
        <DialogDescription className="justify-center text-center">
          로그인 후 서비스를 이용하세요
        </DialogDescription>

        <DialogFooter>
          <LoginButton
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function OpenButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <LoginDialogTemplate
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

LoginDialogTemplate.OpenButton = OpenButton;

export default LoginDialogTemplate;
