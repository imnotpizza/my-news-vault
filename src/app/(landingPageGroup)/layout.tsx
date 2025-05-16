import Layout from '@/components/atoms/Layout';
import FooterTemplate from '@/components/templates/common/Footer';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <Layout className="bg-gradient-to-b from-primary/80 to-primary/20 w-screen h-auto">
      <>{children}</>
      <FooterTemplate />
    </Layout>
  );
}
