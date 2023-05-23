import Meta from '@/components/common/Meta';
import NewsSearchPage from '@/components/search/NewsSearchPage';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>fijeflsefjilsefesf</title>
      </Head>
      <Meta title='ILoveNews-검색'/>
      <NewsSearchPage category={''} />
    </>
  );
};

export default Home;
