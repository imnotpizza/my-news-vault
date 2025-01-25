import Card from '@/components/atoms/CardUI';
import ProfileImage from '@/components/atoms/ProfileImage';
import ProfileButton from '@/components/molecules/ProfileButton';
import { TNewsItem } from '@/types';
import NewsCardPublishedDate from '@/views/newsCard/NewsCardPublishedDate';
import NewsCardThumbnail from '@/views/newsCard/NewsCardThumbnail';
import React, { memo } from 'react';

interface IProps {
  newsItem: TNewsItem;
}

/**
 * 뉴스 카드 컴포넌트
 */
function NewsCard({ newsItem }: IProps) {
  const { title, description, url, providerIcon, datePublished, thumbnail } = newsItem;
  return (
    <Card className="p-0 w-[14.44rem] h-[23.38rem] relative">
      {/* thumbnail */}
      <img src={thumbnail} alt={title} className="w-full" />
      <Card.Content className="p-4 relative">
        <ProfileImage
          src={providerIcon}
          alt={title}
          className="absolute top-[-1.2rem] left-[40%] w-[2.5rem] h-[2.5rem]"
        />
        <Card.Title className="text-md mt-3">{title}</Card.Title>
        <Card.Description className="text-sm">{description}</Card.Description>
      </Card.Content>
      <Card.Footer className="absolute bottom-0 left-0 w-[14.44rem] flex justify-between p-4">
        <span className="text-sm text-mnv-gray-40">{datePublished}</span>
        {/* TODO: 아이콘 추가 */}
        <span>scrap</span>
      </Card.Footer>
    </Card>
  );
}

export default memo(NewsCard);
