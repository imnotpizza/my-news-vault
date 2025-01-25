import React from 'react';
import styled from 'styled-components';
import { twMerge } from 'tailwind-merge';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * 컴포넌트 레이아웃
 *
 * @returns
 */
function Layout({ children, className }: IProps) {
  return (
    <main className={twMerge('w-full h-full flex flex-col items-center', className)}>
      {children}
    </main>
  );
}

Layout.Header = ({ sticky, children, className }: IProps & { sticky?: boolean }) => {
  return (
    <header
      className={twMerge(
        'w-full z-50 flex justify-center',
        'layout__header-height',
        className,
        sticky ? 'sticky top-0' : '',
      )}
    >
      <div className="w-full layout__width layout__padding flex justify-center">
        {children}
      </div>
    </header>
  );
};

/**
 * Layout Body
 * @param isDrawerOpen: drawer가 open되었는지에 따라 이동, drawer 추가시에만 사용
 */
Layout.Body = ({
  children,
  className,
  isDrawerOpen = false,
}: IProps & {
  isDrawerOpen?: boolean;
}) => {
  return (
    <div
      className={twMerge(
        'layout__max-width',
        'w-full h-full flex justify-center flex-grow relative',
        className,
      )}
    >
      <BodyWithAnim
        className={twMerge(
          'w-full h-full layout__padding layout__width body__padding',
          isDrawerOpen ? 'body__drawer-open-margin' : '',
        )}
      >
        {children}
      </BodyWithAnim>
    </div>
  );
};

Layout.Footer = ({ children, className }: IProps) => {
  return (
    <footer
      className={twMerge('w-full z-50 flex justify-center layout__footer-height', className)}
    >
      <div className="w-full layout__width layout__padding">{children}</div>
    </footer>
  );
};

const BodyWithAnim = styled.div`
  transition: margin-left 0.2s ease-in-out;
`;

export default Layout;
