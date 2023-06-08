import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25rem;
  color: #1a2254;
  margin-top: 1.25rem;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const NewsCardTitle = ({ children }) => {
  return <Title>{children}</Title>;
};

export default NewsCardTitle;
