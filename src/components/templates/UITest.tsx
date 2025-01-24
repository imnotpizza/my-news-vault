'use client';

import React, { useEffect } from 'react';
import { Button } from '@/components/atoms/Button';
import { toast } from '@/hooks/useToast';
import Card from '@/components/atoms/CardUI';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/atoms/SelectBox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/atoms/Dialog';
import axios from 'axios';

const fetchData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
  return data;
};

export default function UITest() {
  return (
    <div className="p-4 space-y-4">
      scrap api call test
      <Button
        size="sm"
        onClick={() => {
          axios.get('/api/scrap');
        }}
      >
        getScrap
      </Button>
      <Button
        size="sm"
        onClick={() => {
          axios.patch('/api/scrap');
        }}
      >
        addScrap
      </Button>
      <Button
        size="sm"
        onClick={() => {
          axios.delete('/api/scrap');
        }}
      >
        deleteScrap
      </Button>
      {/* 카드 UI 예제 */}
      <Card className="w-auto">
        <Card.Header>
          <Card.Title>환영합니다</Card.Title>
          <Card.Description>서비스 소개 페이지입니다.</Card.Description>
        </Card.Header>
        <Card.Content>
          <div className="space-y-4">
            <p>메인 콘텐츠가 들어가는 영역입니다.</p>

            {/* 셀렉트박스 예제 */}
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="옵션 선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">옵션 1</SelectItem>
                <SelectItem value="option2">옵션 2</SelectItem>
                <SelectItem value="option3">옵션 3</SelectItem>
              </SelectContent>
            </Select>

            <Button>자세히 보기</Button>
          </div>
        </Card.Content>
        <Card.Footer>
          <p className="text-sm text-gray-500">추가 정보는 하단을 확인해주세요</p>
        </Card.Footer>
      </Card>
      <div>
        <h1>dialog sample</h1>
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your account and
                remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <h1>toast sample</h1>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              description: 'Your message has been sent.',
            });
          }}
        >
          Show Toast
        </Button>
      </div>
    </div>
  );
}
