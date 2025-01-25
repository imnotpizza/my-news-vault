'use client';

import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { TBingNewsFilterQueries } from '@/types';
import { createSearchUrlWithQueries } from '@/utils/newsItem';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

/**
 * 검색 입력 컴포넌트 (Input + Button)
 */
export default function FilterQueriesForm() {
  const [filterQueries, setFilterQueries] = useState<TBingNewsFilterQueries>({
    keyword: '',
  });

  /**
   * query onChange
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterQueries({ ...filterQueries, keyword: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // make query into query string
    const url = createSearchUrlWithQueries(filterQueries);
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <Input
        className="border-mnv-gray-10"
        onChange={handleChange}
        value={filterQueries.keyword}
      />
      {/* TODO: 아이콘으로 교체 */}
      <Button className="border-mnv-gray-10" variant="outline" type="submit">
        검색
      </Button>
    </form>
  );
}
