import Card from '@/components/atoms/CardUI';
import ProfileImage from '@/components/atoms/ProfileImage';
import { cn } from '@/lib/utils';
import { TNewsItem } from '@/types';
import React, { memo } from 'react';
import ScrapButton from '../ScrapButton';

interface IProps {
  newsItem: TNewsItem;
}

/**
 * 뉴스 카드 컴포넌트
 */
function NewsCard({ newsItem }: IProps) {
  const { title, description, url, providerIcon, datePublished, thumbnail } = newsItem;
  return (
    <Card
      className={cn(
        'p-0 relative',
        'desktop:w-[14.44rem] desktop:h-[23.38rem] tablet:w-[14.44rem] tablet:h-[23.38rem]',
        'mobile:w-full mobile:h-auto',
      )}
    >
      <ProfileImage
        src={providerIcon}
        alt={title}
        className={cn('absolute top-[0.6rem] left-[0.6rem] w-[2.5rem] h-[2.5rem]')}
      />
      {/* thumbnail */}
      <img src={thumbnail} alt={title} className={cn('w-full')} />
      <Card.Content className="p-4">
        <div className="flex flex-col gap-2 mb-6">
          <Card.Title className="text-md">{title}</Card.Title>
          <Card.Description className="text-sm overflow-hidden max-h-[5em]">{description}</Card.Description>
        </div>
      </Card.Content>
      <Card.Footer className="absolute bottom-0 left-0 w-full h-auto flex justify-between p-4">
        <span className="text-sm text-mnv-gray-40">{datePublished}</span>
        <ScrapButton newsItem={newsItem} isScrapped={newsItem.isScrapped} />
      </Card.Footer>
    </Card>
  );
}

export default memo(NewsCard);
