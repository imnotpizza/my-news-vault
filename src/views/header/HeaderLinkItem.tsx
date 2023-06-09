import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const LinkItem = styled(Link)`
  font-weight: 500;
  font-size: 17px;
  line-height: 25px;
  color: #1a2254;
  text-decoration: none;
`;

const HeaderLinkItem = ({ href, children }) => {
  return (
    <LinkItem
      href={{
        pathname: href,
      }}
    >
      {children}
    </LinkItem>
  );
};

export default HeaderLinkItem;
