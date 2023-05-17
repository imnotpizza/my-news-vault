import NewsScrapPage from '@/components/scrap/NewsScrapPage';

const ScrapPage = ({ params }) => {
  return <NewsScrapPage userId={params.userId} />;
};

export default ScrapPage;
