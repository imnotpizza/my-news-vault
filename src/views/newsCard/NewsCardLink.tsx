import React from 'react';
import styled from 'styled-components';

const Link = styled.p`
  font-weight: 350;
  font-size: 13px;
  line-height: 19px;
  height: 20px;
  width: 100%;

  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const NewsCardLink = ({ children }) => {
  const onClickNews = () => {
    window.open(children, '_blank');
  };

  return <Link onClick={onClickNews}>{children}</Link>;
};

export default NewsCardLink;
