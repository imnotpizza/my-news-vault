import React from 'react';
import Layout from '@/components/atoms/Layout';
import Header from '@/components/templates/common/Header';

/**
 * 로그인 상태에서의 layout
 */
export default function AfterLoginLayout({ children }) {
  return (
    <Layout className="h-auto">
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Body>{children}</Layout.Body>
    </Layout>
  );
}
