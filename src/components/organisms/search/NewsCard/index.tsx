import Card from '@/components/atoms/CardUI';
import ProfileImage from '@/components/atoms/ProfileImage';
import { cn } from '@/lib/utils';
import { TNewsItem } from '@/types';
import React, { memo } from 'react';
import NewsScrapIcon from '@/assets/news-scrap-icon.svg';
import ImageView from '@/components/atoms/ImageView';
import { useAtom } from 'jotai';
import { detailNewsAtom } from '@/components/templates/search/NewsDetailTemplate';
import styles from './NewsCard.module.css';

interface IProps {
  newsItem: TNewsItem;
}

/**
 * 뉴스 카드 컴포넌트
 */
function NewsCard({ newsItem }: IProps) {
  const [_, setDetailNews] = useAtom<TNewsItem | null>(detailNewsAtom);
  const { title, description, providerIcon, thumbnail, isScrapped } = newsItem;
  return (
    <Card
      className={cn(
        'p-0 relative',
        'desktop:w-[14.44rem] desktop:h-[23.38rem]',
        'tablet:w-[14.44rem] tablet:h-[23.38rem]',
        'mobile:w-full mobile:h-auto',
        'hover:shadow-lg transition-all duration-300',
      )}
      onClick={() => {
        setDetailNews(newsItem);
      }}
    >
      <ProfileImage
        src={providerIcon}
        alt={title}
        className={cn('absolute top-[0.6rem] left-[0.6rem] w-[2rem] h-[2rem] z-30')}
      />
      {isScrapped && (
        <NewsScrapIcon className="absolute top-[0.6rem] right-[0.6rem] w-[2rem] h-[2rem] z-30 fill-pink-500" />
      )}
      {/* thumbnail */}
      {/* FIXME: ImageView 적용, 현재 next/image가 외부이미지를 못읽어 문제발생 */}
      <ImageView src={thumbnail} alt={title} className={cn('w-full aspect-[4/3.8]')} />
      <Card.Content className="p-4">
        <div className="flex flex-col gap-2 mb-6">
          <Card.Title className={cn('text-md', styles['card-title-ellipsis'])}>
            {title}
          </Card.Title>
          <Card.Description
            className={cn('text-sm overflow-hidden max-h-[5em]', styles['card-desc-ellipsis'])}
          >
            {description}
          </Card.Description>
        </div>
      </Card.Content>
    </Card>
  );
}

export default memo(NewsCard);

// <Card.Footer className="absolute bottom-0 left-0 w-full h-auto flex justify-between p-4">
//   <span className="text-sm text-mnv-gray-40">{datePublished}</span>
//   <ScrapButton newsItem={newsItem} isScrapped={newsItem.isScrapped} />
// </Card.Footer>;
