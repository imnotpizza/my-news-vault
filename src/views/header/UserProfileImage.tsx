import React from 'react';
import Image from 'next/image';
import { TUserInfo } from '@/types';
import styled from 'styled-components';

interface IUserProfileImageProps {
  src: TUserInfo['photoURL'];
  alt: TUserInfo['displayName'];
}

const ProfileImage = styled(Image)`
  border-radius: 50%;
`;

// TODO: default 이미지 추가
const UserProfileImage = ({ src, alt }: IUserProfileImageProps) => {
  return <ProfileImage src={src} width={20} height={20} alt={`${alt}'s profile image`} />;
};

export default UserProfileImage;
