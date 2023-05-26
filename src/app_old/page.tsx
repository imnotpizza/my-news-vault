import Meta from '@/components/common/Meta';
import NewsSearchPage from '@/components/search/NewsSearchPage';
import { random } from 'lodash-es';
const getKeyword = () => {
  return {
    props: {
      keyword: `ILoveNews-검색:${random(1, 5)}`,
    },
  };
};

const Home = () => {
  const { props } = getKeyword();

  return (
    <>
      <Meta title={props.keyword} />
      <NewsSearchPage category={''} />
    </>
  );
};

export default Home;
