import { responsive } from '@/styles/responsive';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const LinkItem = styled(Link)`
  font-weight: 500;
  font-size: 17px;
  line-height: 25px;
  color: ${(p) => p.theme.Navy.Default};
  text-decoration: none;

  ${responsive.mobile} {
    font-size: 14px;

  }
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
