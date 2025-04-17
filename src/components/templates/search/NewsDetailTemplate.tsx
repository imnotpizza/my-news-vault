'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/atoms/Dialog'; // Dialog 경로에 맞게 변경
import { TNewsItem } from '@/types';
import { Button } from '@/components/atoms/Button';
import { atom, useAtom } from 'jotai';
import ScrapButton from '@/components/organisms/search/ScrapButton';
import { cn } from '@/lib/utils';
import ProfileImage from '@/components/atoms/ProfileImage';
import ImageView from '@/components/atoms/ImageView';

interface IProps {
  newsItem: TNewsItem;
}

export const detailNewsAtom = atom<TNewsItem | null>(null);

/**
 * 뉴스 상세정보 모달 템플릿
 * - 뉴스 제목
 * - 뉴스 상세정보
 * - 뉴스 이미지
 * - 뉴스 작성일
 * - 뉴스 스크랩 버튼
 */
export default function NewsDetailTemplate() {
  const [detailNews, setDetailNews] = useAtom<TNewsItem | null>(detailNewsAtom);
  return (
    <Dialog open={!!detailNews} onOpenChange={(isOpen) => !isOpen && setDetailNews(null)}>
      {/* 모달 내용 */}
      <section className="desktop:flex tablet:flex mobile:flex-col gap-4 relative">
        <ProfileImage
          src={detailNews.providerIcon}
          alt={detailNews.title}
          className={cn('absolute top-[0.6rem] left-[0.6rem] w-[2rem] h-[2rem] z-30')}
        />
        <div className="w-1/2 mobile:w-full">
          <ImageView
            src={detailNews.thumbnail}
            alt={detailNews.title}
            className={cn('w-full aspect-[4/3.8]')}
          />
        </div>
        <div className="w-1/2 mobile:w-full gap-4">
          <h2>{detailNews.title}</h2>
          <p>{detailNews.description}</p>
          <div className="w-full flex justify-between items-center">
            <span className="text-sm text-mnv-gray-40">{detailNews.datePublished}</span>
            <ScrapButton newsItem={detailNews} isScrapped={detailNews.isScrapped} />
          </div>
        </div>
      </section>
    </Dialog>
  );
}
