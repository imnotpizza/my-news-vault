import { INewsItem } from '@/types';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { scrapNews, unscrapNews } from '@/api/client';
import { queryClient } from '@/queries/queryClient';
import { scrappedNewsListQueryKey } from '@/queries/useScrappedNewsList';
import NewsThumbnailView from '@/views/news/NewsThumbnailView';
import { IUserInfoContext, userInfoContext } from '@/utils/userInfoProvider';

const Container = styled.div`
  width: 300px;
  height: 500px;
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 30px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

  .news-title {
    font-size: 20px;
  }

  .news-desc {
    font-size: 15px;
    margin: 15px 0;
  }
`;

const NewsItemView = ({ item }: { item: INewsItem }) => {
  const { userInfo } = React.useContext<IUserInfoContext>(userInfoContext);
  const disabled = useMemo(() => !userInfo?.email, [userInfo]);
  const onClickVisit = () => {
    window.open(item.thumbnail);
  };

  const onClickScarp = async () => {
    try {
      await scrapNews(userInfo!.email, item);
      queryClient.setQueryData([scrappedNewsListQueryKey], (oldData: any) => {
        return [...oldData, item];
      });
      alert('success');
    } catch (e) {
      alert('failed');
    }
  };

  const onClickDeleteScrap = async () => {
    try {
      await unscrapNews(userInfo!.email, item.newsId);
      queryClient.setQueryData([scrappedNewsListQueryKey], (oldData: any) => {
        return oldData.filter((news: INewsItem) => news.newsId !== item.newsId);
      });
      alert('success');
    } catch (e) {
      alert('failed');
    }
  };

  return (
    <Container>
      <p className="news-title">{item.title}</p>
      <NewsThumbnailView src={item.thumbnail} alt={`${item.title} thumbnail`} />
      <p className="news-desc">{item.description}</p>
      <button onClick={onClickVisit}>방문하기</button>
      <button disabled={disabled} onClick={onClickScarp}>
        스크랩
      </button>
      <button disabled={disabled} onClick={onClickDeleteScrap}>
        스크랩 삭제
      </button>
      <div>스크랩여부: {item.isScrapped?.toString()}</div>
    </Container>
  );
};

export default NewsItemView;
