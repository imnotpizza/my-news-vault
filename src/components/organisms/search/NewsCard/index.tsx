import Card from '@/components/atoms/CardUI';
import { TNewsItem } from '@/types';
import NewsCardThumbnail from '@/views/newsCard/NewsCardThumbnail';
import React from 'react';

interface IProps {
  newsItem: TNewsItem;
}

/**
 * 뉴스 카드 컴포넌트
 */
export default function NewsCard({ newsItem }: IProps) {
  const { title, description, url, providerIcon, datePublished, thumbnail } = newsItem;
  return (
    <Card>
      <Card.Content>
        {/* NewsCardThumbnail */}
        <NewsCardThumbnail src={thumbnail} alt={title} />
      </Card.Content>
      <Card.Footer>Card Footer</Card.Footer>
    </Card>
  );
}
