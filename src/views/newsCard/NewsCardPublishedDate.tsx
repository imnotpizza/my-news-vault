import { responsive } from '@/styles/responsive';
import React from 'react';
import styled from 'styled-components';

const Date = styled.p`
  font-weight: 350;
  font-size: 0.75rem;
  line-height: 1.13rem;
  color: #1a2254;

  ${responsive.mobile} {
    font-weight: 350;
    font-size: 12px;
    line-height: 1;
    color: #1a2254;
  }
`;

const NewsCardPublishedDate = ({ children }) => {
  return <Date>{children}</Date>;
};

export default NewsCardPublishedDate;
