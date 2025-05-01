import Skeleton from '@/components/atoms/Skeleton';
import NewsGridList from '@/components/atoms/NewsGridList';
import { cn } from '@/lib/utils';
import React from 'react';

const CardSkeleton = () => {
  return (
    <Skeleton.Container
      className={cn(
        'p-0 relative',
        'desktop:w-[14.44rem] desktop:h-[23.38rem] tablet:w-[14.44rem] tablet:h-[23.38rem]',
        'mobile:w-full mobile:h-auto',
      )}
    >
      <Skeleton.Box className="w-full h-[13rem]" />
      <div className="p-4 flex flex-col gap-2">
        <Skeleton.Box className="w-full h-4" />
        <Skeleton.Box className="w-full h-4" />
        <Skeleton.Box className="w-full h-4" />
        <Skeleton.Box className="w-full h-4" />
        <div className="flex justify-between items-center mt-2 gap-2">
          <Skeleton.Box className="w-14" />
        </div>
      </div>
    </Skeleton.Container>
  );
};

/** skeleton ui 표시할 숫자 */
const LIST_NUM = 12;

/**
 * SearchPageView 로딩 페이지
 */
export default function SearchPageFallback() {
  return (
    <NewsGridList>
      {Array.from({ length: LIST_NUM }).map((_, idx) => (
        <CardSkeleton key={idx} />
      ))}
    </NewsGridList>
  );
}
