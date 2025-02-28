import { Button } from '@/components/atoms/Button';
import useAuth from '@/hooks/useAuth';
import { useScrapNews, useUnscrapNews } from '@/queries/useScrapNews';
import { TNewsItem } from '@/types';
import React from 'react';
import NewsScrapIcon from '@/assets/news-scrap-icon.svg';

interface IScrapButtonProps {
  isScrapped: boolean;
  newsItem: TNewsItem;
}

export default function ScrapButton({ newsItem, isScrapped }: IScrapButtonProps) {
  const { isLogined, authState } = useAuth();
  const { userInfo } = authState;
  const { mutate: scrapNews, isPending: isScrappingNews } = useScrapNews();
  const { mutate: unscrapNews, isPending: isUnscrappingNews } = useUnscrapNews();

  const title = isScrapped ? '스크랩 해제' : '스크랩 추가';

  // TODO: useCallback 추가
  const onClickScarp = async () => {
    if (!isLogined) {
      alert('스크랩 기능은 로그인 후 사용해주세요.');
      return;
    }
    scrapNews({
      newsItem,
      isScrapped: true,
      query: newsItem.searchQuery,
      userId: userInfo!.email,
    });
  };

  // TODO: useCallback 추가
  const onClickUnscrap = async () => {
    unscrapNews({
      newsItem,
      isScrapped: false,
      query: newsItem.searchQuery,
      userId: userInfo!.email,
    });
  };

  return (
    <Button
      disabled={isScrappingNews || isUnscrappingNews}
      aria-label={title}
      variant="ghost"
      onClick={() => {
        if (isScrapped) {
          onClickUnscrap();
        } else {
          onClickScarp();
        }
      }}
    >
      <NewsScrapIcon />
    </Button>
  );
}
