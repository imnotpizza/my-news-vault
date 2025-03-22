import { Button } from '@/components/atoms/Button';
import useAuth from '@/hooks/useAuth';
import { useScrapNews, useUnscrapNews } from '@/queries/useScrapNews';
import { TNewsItem } from '@/types';
import React from 'react';
import NewsScrapIcon from '@/assets/news-scrap-icon.svg';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/useToast';

interface IScrapButtonProps {
  isScrapped: boolean;
  newsItem: TNewsItem;
}

export default function ScrapButton({ newsItem, isScrapped }: IScrapButtonProps) {
  const { toast } = useToast();
  const { isLogined, authState } = useAuth();
  const { userInfo } = authState;
  const {
    mutateAsync: scrapNews,
    isPending: isScrappingNews,
    rollbackScrapMutation,
  } = useScrapNews();
  const {
    mutateAsync: unscrapNews,
    isPending: isUnscrappingNews,
    rollbackUnscrapMutation,
  } = useUnscrapNews();

  const title = isScrapped ? '스크랩 해제' : '스크랩 추가';

  // TODO: useCallback 추가
  const onClickScarp = async () => {
    if (!isLogined) {
      toast({
        description: '스크랩 기능은 로그인 후 이용 가능합니다',
      });
      return;
    }
    try {
      await scrapNews({
        newsItem,
        isScrapped: true,
        query: newsItem.searchQuery,
        userId: userInfo!.email,
      });
      toast({
        description: '스크랩이 완료되었습니다',
      });
    } catch (e) {
      toast({
        description: '스크랩 등록 도중 문제가 발생하였습니다',
      });
      rollbackScrapMutation({
        newsItem,
        isScrapped: false,
      });
    }
  };

  // TODO: useCallback 추가
  const onClickUnscrap = async () => {
    try {
      await unscrapNews({
        newsItem,
        isScrapped: false,
        query: newsItem.searchQuery,
        userId: userInfo!.email,
      });
      toast({
        description: '스크랩 삭제가 완료되었습니다',
      });
    } catch (e) {
      toast({
        description: '스크랩 삭제 도중 문제가 발생하였습니다',
      });
      rollbackUnscrapMutation({
        newsItem,
        isScrapped: true,
      });
    }
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
      className="p-2"
    >
      <NewsScrapIcon
        className={cn('!w-8 !h-8', isScrapped ? 'fill-pink-500' : 'fill-gray-400')}
      />
    </Button>
  );
}
