import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { responsive } from '@/styles/responsive';

const Profile = styled(Image)`
  width: 38px;
  height: 38px;
  border-radius: 19px;
  ${responsive.mobile} {
    width: 30px;
    height: 30px;
  }
`;

const UserProfile = ({ src, alt }) => {
  return <Profile src={src || '/img/default-user-profile.png'} alt={alt} width={38} height={38} />;
};

export default UserProfile;
