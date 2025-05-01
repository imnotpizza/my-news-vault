import React from 'react';
import Layout from '@/components/atoms/Layout';
import Header from '@/components/templates/common/Header';

/**
 * 로그인 상태에서의 layout
 */
export default function AfterLoginLayout({ children }) {
  return (
    <Layout className="w-full bg-background">
      <Layout.Header className="shadow-md fixed">
        <Header />
      </Layout.Header>
      <Layout.Body className="mt-[64px]">{children}</Layout.Body>
    </Layout>
  );
}
