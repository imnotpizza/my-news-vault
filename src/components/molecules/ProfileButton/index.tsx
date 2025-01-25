import { Button } from '@/components/atoms/Button';
import Image from 'next/image';
import React from 'react';

interface IProps {
  label: string;
  onClick: () => void;
  src: string;
  userName: string;
}

/**
 * 사용자 profile 버튼
 *
 * 클릭 시: 사용자 정보 페이지로 이동
 * TODO: 사용자 정보 관련 고도화
 *
 * @params onClick 클릭 시 이벤트
 * @params src 사용자 프로필 이미지
 * @params userName 사용자 이름
 */
const ProfileButton: React.FC<IProps> = ({ onClick, src, userName }: IProps) => {
  return (
    <Button variant="ghost" className="rounded-full w-[50px] h-[50px] p-2" onClick={onClick}>
      <Image
        width={40}
        height={40}
        className="rounded-full"
        src={src}
        alt={``}
      />
    </Button>
  );
};

export default ProfileButton;
