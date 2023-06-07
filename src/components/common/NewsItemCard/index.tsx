import { TNewsItem } from '@/types';
import React, { memo } from 'react';
import styled from 'styled-components';
import { scrapNews, unscrapNews } from '@/api/client';
import { IUserInfoContext, userInfoContext } from '@/utils/userInfoProvider';
import NewsThumbnail from '@/views/newsItemCard/NewsThumbnail';
import ScrapButton from '@/views/newsItemCard/ScrapButton';
import VisitButton from '@/views/newsItemCard/VisitButton';
import { addScrapNewsToCache, deleteScrapNewsFromCache } from '@/queries/useScrappedNewsList';

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

const NewsItemCard = ({ item }: { item: TNewsItem }) => {
  const { isScrapped, title, thumbnail, description, newsId, url } = item;
  const { userInfo, isSignin } = React.useContext<IUserInfoContext>(userInfoContext);

  const onClickScarp = async () => {
    try {
      await scrapNews(userInfo!.email, item);
      addScrapNewsToCache(item);
      alert('success');
    } catch (e) {
      alert('failed');
    }
  };

  const onClickUnscrap = async () => {
    try {
      await unscrapNews(userInfo!.email, newsId);
      deleteScrapNewsFromCache(newsId);
      alert('success');
    } catch (e) {
      alert('failed');
    }
  };

  return (
    <Container>
      <p className="news-title">{title}</p>
      <NewsThumbnail src={thumbnail} alt={`${title} thumbnail`} />
      <p className="news-desc">{description}</p>
      <VisitButton url={url} />
      <ScrapButton
        isScrapped={isScrapped}
        disabled={!isSignin}
        onClickScarp={onClickScarp}
        onClickUnscrap={onClickUnscrap}
      />
      <div>스크랩여부: {isScrapped?.toString()}</div>
    </Container>
  );
};

export default memo(NewsItemCard);
