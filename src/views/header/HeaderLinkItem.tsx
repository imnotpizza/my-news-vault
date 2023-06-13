import { responsive } from '@/styles/responsive';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const LinkItem = styled(Link)`
  font-weight: 500;
  font-size: 1.06rem;
  line-height: 1.56rem;
  color: ${(p) => p.theme.Navy.Default};
  text-decoration: none;

  ${responsive.mobile} {
    font-size: 0.88rem;

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
