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
      {/* 모달을 여는 버튼 */}

      {/* 모달 내용 */}
      <DialogContent className="bg-white p-6 rounded-lg">
        <DialogHeader>
          <DialogTitle>구독하시겠습니까?</DialogTitle>
          <DialogDescription>뉴스 상세정보 레이아웃 만들고 넣어주세요</DialogDescription>
        </DialogHeader>
        <ScrapButton isScrapped={detailNews?.isScrapped} newsItem={detailNews!} />
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
