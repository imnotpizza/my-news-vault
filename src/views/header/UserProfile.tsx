import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Profile = styled(Image)`
  width: 38px;
  height: 38px;
  border-radius: 19px;
`;

const UserProfile = ({ src, alt }) => {
  return <Profile src={src} alt={alt} width={38} height={38} />;
};

export default UserProfile;
