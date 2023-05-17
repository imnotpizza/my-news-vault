import React from 'react';
import QueryForm from '../../input/QueryForm';
import NewsItemList from '../../common/NewsItemList';

const NewsSearchPage = () => {
  return <div>
    <div>
      <QueryForm/>
    </div>
    <div>
      <NewsItemList/>
    </div>
  </div>;
};

export default NewsSearchPage;
