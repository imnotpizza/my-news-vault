import { TNewsItem } from '@/types';
import React, { memo } from 'react';
import styled from 'styled-components';
import { scrapNews, unscrapNews } from '@/api/client';
import { IUserInfoContext, userInfoContext } from '@/utils/userInfoProvider';
import { addScrapNewsToCache, deleteScrapNewsFromCache } from '@/queries/useScrappedNewsList';
import NewsCardThumbnail from '@/views/newsItemCard/NewsCardThumbnail';
import NewsCardProvider from '@/views/newsItemCard/NewsCardProvider';
import NewsCardTitle from '@/views/newsItemCard/NewsCardTitle';
import NewsCardDesc from '@/views/newsItemCard/NewsCardDesc';
import NewsCardPublishedDate from '@/views/newsItemCard/NewsCardPublishedDate';
import NewsCardScrapButton from '@/views/newsItemCard/NewsCardScrapButton';

const Container = styled.div`
  width: 14.44rem;
  background: #ffffff;
  box-shadow: 0rem 0rem 0.25rem 0.06rem rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  border: 0.06rem solid #112ebe00;
  &:hover {
    border: 0.06rem solid #112ebe;
    box-shadow: 0rem 0rem 0.5rem 0.19rem rgba(35, 78, 180, 0.15);
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;

  & > .contents {
    margin: 0rem 1.25rem;
  }

  & > .bottom {
    width: 11.94rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
  }
`;

const NewsCard = ({ item }: { item: TNewsItem }) => {
  const { isScrapped, title, thumbnail, description, newsId, url, providerIcon, datePublished } =
    item;
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

  const onClickNews = () => {
    window.open(url, '_blank');
  };

  return (
    <Container onClick={onClickNews}>
      <NewsCardThumbnail src={thumbnail} alt={title} />
      <div className="contents">
        <NewsCardProvider src={providerIcon} alt={'provider'} />
        <NewsCardTitle>{title}</NewsCardTitle>
        <NewsCardDesc>{description}</NewsCardDesc>

        <div className="bottom">
          <NewsCardPublishedDate>{datePublished}</NewsCardPublishedDate>
          <NewsCardScrapButton
            isScrapped={isScrapped}
            disabled={!isSignin}
            onClickScarp={onClickScarp}
            onClickUnscrap={onClickUnscrap}
          />
        </div>
      </div>
    </Container>
  );
};

export default memo(NewsCard);
