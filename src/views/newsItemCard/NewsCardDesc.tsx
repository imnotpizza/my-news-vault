import React from 'react';
import styled from 'styled-components';

const Desc = styled.p`
  font-weight: 350;
  font-size: 14px;
  line-height: 21px;
  color: #484e76;
  margin-top: 20px;
  height: 63px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const NewsCardDesc = ({ description }) => {
  return <Desc>{description}</Desc>;
};

export default NewsCardDesc;
