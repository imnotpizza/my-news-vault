import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { responsive } from '@/styles/responsive';

const Profile = styled(Image)`
  width: 2.38rem;
  height: 2.38rem;
  border-radius: 1.19rem;
  ${responsive.mobile} {
    width: 1.88rem;
    height: 1.88rem;
  }
`;

const UserProfile = ({ src, alt }) => {
  return <Profile src={src || '/img/default-user-profile.png'} alt={alt} width={38} height={38} />;
};

export default UserProfile;
