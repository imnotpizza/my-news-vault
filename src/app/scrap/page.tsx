'use client';

import QueryStateWrapper from '@/components/common/QueryStateWrapper';
import QueryInput from '@/components/input/QueryInput';
import useBingNewsFetch from '@/queries/useBingNewsFetch';
import NewsItemView from '@/views/news/NewsItemView';
import { createArticle, deleteArticle, getArticles, updateArticle } from '@/firebase';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { flatMap } from 'lodash-es';
import { InView, useInView } from 'react-intersection-observer';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .page-title {
    font-size: 2rem;
    font-weight: bold;
    height: 10%;
  }

  .search-input {
    height: 10%;
  }

  .news-list {
    min-width: 100%;
    height: auto;
    width: 100%;
    height: 80%;
  }
`;

const GridContainer = styled.div`
  display: grid !important;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  background-color: blue;
`;

const NewsScrapPage = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const [query, setQuery] = React.useState('');
  const [pageNum, setPageNum] = React.useState(1);

  const queryStates = useBingNewsFetch({ query, pageNum });
  const { data, fetchNextPage } = queryStates;

  // TODO: 문제있을시 변경하기
  const dataList = flatMap(data?.pages, (page) => page);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <Container>
      <div>
        <p className="page-title">뉴스 스크랩 목록</p>
      </div>
      <div className="search-input">
        <QueryInput setQuery={setQuery} />
      </div>
      <div className="news-list">
        <button
          onClick={async () => {
            await getArticles();
            createArticle({
              datePublished: '123',
              description: '123',
              headline: 'title',
              providerIcon: 'icon',
              providerName: 'name',
              thumbnail: 'thumbnail',
              userId: 'userId',
            });
          }}
        >
          create
        </button>
        {/* <QueryStateWrapper queryStates={queryStates}>
          <InView>
            <GridContainer>
              {dataList.map((item) => (
                <NewsItemView key={item.id} item={item} />
              ))}
            </GridContainer>
            <div ref={ref}>loadingview</div>
          </InView>
        </QueryStateWrapper> */}
        <button
          onClick={() => {
            fetchNextPage();
          }}
        >
          추가호출
        </button>
      </div>
    </Container>
  );
};

export default NewsScrapPage;

// {
//   /* // <button
// // onClick={async () => {
// //   const val = await getArticles();
// //   console.log('##### val', val);
// // }}
// // >
// // get
// // </button>
// // <button onClick={async () => {
// // updateArticle('D7df7q3M6BK1mTdtTsjz', {
// //   datePublished: 'updated',
// //   description: 'updated',
// //   headline: 'updatedtitle',
// //   providerIcon: 'updatedicon',
// //   providerName: 'updatedname',
// //   userId: 'userId',
// // })
// // }}>update</button>
// // <button onClick={() => {
// // deleteArticle('D7df7q3M6BK1mTdtTsjz');
// // }}>delete</button> */
// }
