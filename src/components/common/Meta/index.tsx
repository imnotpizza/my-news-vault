import Head from 'next/head';
import React from 'react';

/**
 * meta tag, seo 관련 설정
 */

const Meta = ({ title, description, url }) => {
  return (
    <Head>
      <title>{title || 'I Love News'}</title>
      <meta
        name="description"
        content={
          description ||
          '쉽고 빠른 뉴스검색은 역시 I Love News! 카테고리별로 뉴스 검색, 뉴스 스크랩을 제공합니다.'
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || 'I Love News'} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || 'https://ilovenews.com'} />
      <meta property="og:image" content={'../../../public/ilovenews-og.png'} />
      <meta property="og:article:author" content="ilovenews" />
      <meta google-site-verification="P6j1qmKWLdH1ySNcOJiN0Ia5aJpv-V2rW2DExEhpH0k" />
    </Head>
  );
};

export default Meta;
