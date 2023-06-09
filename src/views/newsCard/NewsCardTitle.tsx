import { responsive } from '@/styles/responsive';
import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25rem;
  color: ${(p) => p.theme.Navy.Default};

  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  ${responsive.mobile} {
    font-weight: 500;
    font-size: 14px;
    line-height: 1;
    color: ${(p) => p.theme.Navy.Default};
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    text-align: left;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const NewsCardTitle = ({ children }) => {
  return <Title>{children}</Title>;
};

export default NewsCardTitle;
