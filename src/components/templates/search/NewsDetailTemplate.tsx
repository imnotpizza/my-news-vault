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
    <Dialog open={!!detailNews}>
      {/* 모달을 여는 버튼 */}
      <DialogTrigger asChild>
        <Button className="bg-blue-500 text-white px-4 py-2 rounded">구독하기</Button>
      </DialogTrigger>

      {/* 모달 내용 */}
      <DialogContent className="bg-white p-6 rounded-lg">
        <DialogHeader>
          <DialogTitle>구독하시겠습니까?</DialogTitle>
          <DialogDescription>구독하면 최신 정보를 받아볼 수 있습니다.</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => {
              setDetailNews(null);
            }}
          >
            구독하기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
