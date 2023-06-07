import Head from 'next/head';
import React from 'react';
import appInfo from '@/constants/appinfo';

/**
 * meta tag, seo 관련 설정
 */

interface IMetaProps {
  title?: string;
  description?: string;
  url?: string;
}

const Meta = ({ title, description, url }: IMetaProps) => {
  return (
    <Head>
      <title>{title || appInfo.app_name}</title>
      <meta
        name="description"
        content={
          // prettier-ignore
          description || appInfo.app_desc
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || appInfo.app_name} />
      <meta
        property="og:description"
        content={
          // prettier-ignore
          description || appInfo.app_desc
        }
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || appInfo.app_url} />
      <meta property="og:image" content="/og-thumbnail.png" />
      <meta property="og:article:author" content={appInfo.author} />
    </Head>
  );
};

export default Meta;
