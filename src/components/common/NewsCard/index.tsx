import { TNewsItem } from '@/types';
import React, { memo, useMemo } from 'react';
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
import { responsive } from '@/styles/responsive';
import { updateNewsSearchQuery } from '@/queries/useBingNewsFetch';
import { useRouter } from 'next/router';

const Container = styled.div`
  width: 14.44rem;
  height: 23.38rem;
  background: ${(p) => p.theme.White};
  box-shadow: 0rem 0rem 0.25rem 0.06rem rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  &:hover {
    border: 0.06rem solid ${(p) => p.theme.Blue.Default};
    box-shadow: 0rem 0rem 0.5rem 0.19rem rgba(35, 78, 180, 0.15);
  }
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;
  position: relative;
  z-index: 100;

  .contents {
    margin: 0 1.25rem;
  }

  .contents > .provider {
    margin-top: 0.5rem;
  }

  .contents > .url {
    margin-top: 0.5rem;
  }

  .bottom-space {
    width: 82%;
    align-items: center;
    position: absolute;
    bottom: 0.6rem;
  }

  ${responsive.mobile} {
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 288px;
    width: 100%;
    height: 137px;
    background: ${(p) => p.theme.White};
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 0;
    margin: 0 auto;

    .contents {
      width: 80%;
      height: 100%;
      margin: 0;
      margin-right: 10px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    .contents > .provider {
      width: 100%;
      height: 24px;
    }
    .contents > .title {
      width: 100%;
      height: 30px;
      margin-top: 10px;
    }
    .contents > .desc {
      margin-top: 5px;
      width: 100%;
    }
    .contents > .url {
      margin: 0;
    }
    .contents > .bottom-space {
      width: 100%;
      height: 30%;
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      position: relative;
    }
  }
`;

const NewsCard = ({ item }: { item: TNewsItem }) => {
  const router = useRouter();
  const searchQuery = useMemo(() => router.query.query as string, [router.query.query]);

  // eslint-disable-next-line
  const { isScrapped, title, thumbnail, description, newsId, url, providerIcon, datePublished } =
    item;
  const { userInfo, isSignin } = React.useContext<IUserInfoContext>(userInfoContext);

  // TODO: useCallback 추가
  const onClickScarp = async () => {
    if (!isSignin) {
      alert('스크랩 기능은 로그인 후 사용해주세요.');
    }
    try {
      updateNewsSearchQuery(newsId, true, searchQuery);
      await scrapNews(userInfo!.email, item);
      addScrapNewsToCache(item);
      alert('scrap success');
    } catch (e) {
      console.error(e);
      alert('failed');
    }
  };

  // TODO: useCallback 추가
  const onClickUnscrap = async () => {
    try {
      updateNewsSearchQuery(newsId, false, searchQuery);
      await unscrapNews(userInfo!.email, newsId);
      deleteScrapNewsFromCache(newsId);
      alert('unscrap success');
    } catch (e) {
      console.error(e);
      alert('failed');
    }
  };

  return (
    <Container className="news-card flex-column align-start">
      <NewsCardThumbnail src={thumbnail} alt={title} />
      <div className="contents">
        <div className="provider">
          <NewsCardProvider src={providerIcon} alt={'provider'} />
        </div>
        <div className="title">
          <NewsCardTitle>{title}</NewsCardTitle>
        </div>
        <div className="desc">
          <NewsCardDesc>{description}</NewsCardDesc>
        </div>
        <div className="url">
          <NewsCardLink>{url}</NewsCardLink>
        </div>

        <div className="bottom-space flex-row justify-between">
          <NewsCardPublishedDate>{datePublished}</NewsCardPublishedDate>
          <NewsCardScrapButton
            isScrapped={isScrapped}
            onClickScarp={onClickScarp}
            onClickUnscrap={onClickUnscrap}
          />
        </div>
      </div>
    </Container>
  );
};

export default memo(NewsCard);
