import { TNewsItem } from '@/types';
import React, { memo } from 'react';
import styled from 'styled-components';
import { IUserInfoContext, userInfoContext } from '@/utils/userInfoProvider';
import NewsCardThumbnail from '@/views/newsCard/NewsCardThumbnail';
import NewsCardProvider from '@/views/newsCard/NewsCardProvider';
import NewsCardTitle from '@/views/newsCard/NewsCardTitle';
import NewsCardDesc from '@/views/newsCard/NewsCardDesc';
import NewsCardPublishedDate from '@/views/newsCard/NewsCardPublishedDate';
import NewsCardScrapButton from '@/views/newsCard/NewsCardScrapButton';
import NewsCardLink from '@/views/newsCard/NewsCardLink';
import { responsive } from '@/styles/responsive';
import { useScrapNews, useUnscrapNews } from '@/queries/useScrapNews';

const Container = styled.div`
  width: 14.44rem;
  height: 23.38rem;
  background: ${(p) => p.theme.White};
  box-shadow: 0rem 0rem 0.25rem 0.06rem rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  &:hover {
    box-shadow: 0rem 0rem 0.5rem 0.2rem rgba(35, 78, 180, 0.15);
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
    min-width: 18rem;
    width: 100%;
    height: 8.56rem;
    background: ${(p) => p.theme.White};
    box-shadow: 0rem 0rem 0.25rem 0.06rem rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    padding: 0;
    margin: 0 auto;

    .contents {
      width: 100%;
      height: 100%;
      margin: 0;
      margin-right: 0.63rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    .contents > .provider {
      width: 100%;
      height: 1.5rem;
    }
    .contents > .title {
      width: 100%;
      height: 1.88rem;
      margin-top: 0.63rem;
    }
    .contents > .desc {
      margin-top: 0.31rem;
      width: 100%;
    }
    .contents > .url {
      margin: 0;
    }
    .contents > .bottom-space {
      width: 100%;
      height: 30%;
      margin-top: 1.25rem;
      position: relative;
    }
  }
`;

const NewsCard = ({ item }: { item: TNewsItem }) => {
  const { isScrapped, title, thumbnail, description, url, providerIcon, datePublished } = item;
  const { userInfo, isSignin } = React.useContext<IUserInfoContext>(userInfoContext);

  // const { mutate: scrapNews, isLoading: isScrappingNews } = useScrapNews();
  // const { mutate: unscrapNews, isLoading: isUnscrappingNews } = useUnscrapNews();

  // TODO: useCallback 추가
  const onClickScarp = async () => {
    if (!isSignin) {
      alert('스크랩 기능은 로그인 후 사용해주세요.');
    }
    // scrapNews({
    //   newsItem: item,
    //   isScrapped: true,
    //   query: item.searchQuery,
    //   userId: userInfo!.email,
    // });
  };

  // TODO: useCallback 추가
  const onClickUnscrap = async () => {
    // unscrapNews({
    //   newsItem: item,
    //   isScrapped: false,
    //   query: item.searchQuery,
    //   userId: userInfo!.email,
    // });
  };

  return (
    <Container className="news-card flex-column align-start" data-testid="news-card-ui">
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

        <div className="bottom-space flex-row justify-space-between">
          <NewsCardPublishedDate>{datePublished}</NewsCardPublishedDate>
          {/* <NewsCardScrapButton
            disabled={isScrappingNews || isUnscrappingNews}
            isScrapped={isScrapped}
            onClickScarp={onClickScarp}
            onClickUnscrap={onClickUnscrap}
          /> */}
        </div>
      </div>
    </Container>
  );
};

export default memo(NewsCard);
