import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import React from 'react';

/**
 * 검색 입력 컴포넌트 (Input + Button)
 */
export default function SearchInput() {
  return (
    <div className="flex gap-2">
      <Input className="border-mnv-gray-10" />
      {/* TODO: 아이콘으로 교체 */}
      <Button className="border-mnv-gray-10" variant="outline">
        검색
      </Button>
    </div>
  );
}
