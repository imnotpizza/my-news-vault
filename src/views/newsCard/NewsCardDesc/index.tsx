import { responsive } from '@/styles/responsive';
import React from 'react';
import styled from 'styled-components';

const Desc = styled.p`
  font-weight: 350;
  font-size: 0.88rem;
  line-height: 1.31rem;
  color: ${(p) => p.theme.Navy.Navy_80};
  margin-top: 1.25rem;
  height: 3.94rem;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  ${responsive.mobile} {
    display: none;
  }
`;

const NewsCardDesc = ({ children }) => {
  return <Desc>{children}</Desc>;
};

export default NewsCardDesc;
