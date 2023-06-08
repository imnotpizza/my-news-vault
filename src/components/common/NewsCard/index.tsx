import { TNewsItem } from '@/types';
import React, { memo } from 'react';
import styled from 'styled-components';
import { scrapNews, unscrapNews } from '@/api/client';
import { IUserInfoContext, userInfoContext } from '@/utils/userInfoProvider';
import { addScrapNewsToCache, deleteScrapNewsFromCache } from '@/queries/useScrappedNewsList';
import NewsCardThumbnail from '@/views/newsCard/NewsCardThumbnail';
import NewsCardProvider from '@/views/newsCard/NewsCardProvider';
import NewsCardTitle from '@/views/newsCard/NewsCardTitle';
import NewsCardDesc from '@/views/newsCard/NewsCardDesc';
import NewsCardPublishedDate from '@/views/newsCard/NewsCardPublishedDate';
import NewsCardScrapButton from '@/views/newsCard/NewsCardScrapButton';
import NewsCardLink from '@/views/newsCard/NewsCardLink';

const Container = styled.div`
  width: 14.44rem;
  height: 23.38rem;
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
  position: relative;

  .contents {
    margin: 0 1.25rem;
  }

  .contents > .provider {
    margin-top: 0.5rem;
  }

  .bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 1rem;
  }

  .contents > .url {
    margin-top: 0.5rem;
  }
`;

const NewsCard = ({ item }: { item: TNewsItem }) => {
  // eslint-disable-next-line
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

  return (
    <Container>
      <NewsCardThumbnail src={thumbnail} alt={title} />
      <div className="contents">
        <div className="provider">
          <NewsCardProvider src={providerIcon} alt={'provider'} />
        </div>
        <NewsCardTitle>{title}</NewsCardTitle>
        <NewsCardDesc>{description}</NewsCardDesc>
        <div className="url">
          <NewsCardLink>{url}</NewsCardLink>
        </div>

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
