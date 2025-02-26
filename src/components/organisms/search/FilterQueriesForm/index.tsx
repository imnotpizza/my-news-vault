'use client';

import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import useBingNewsFetch from '@/queries/useBingNewsFetch';
import { TBingNewsFilterQueries } from '@/types';
import { createSearchUrlWithQueries } from '@/utils/newsItem';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

/**
 * 검색 입력 컴포넌트 (Input + Button)
 */
export default function FilterQueriesForm() {
  const router = useRouter();
  const { filterQueries: initializedFilterQueries } = useBingNewsFetch.state();
  const [filterQueries, setFilterQueries] = useState<TBingNewsFilterQueries>({
    ...initializedFilterQueries,
  });

  useEffect(() => {
    setFilterQueries({ ...initializedFilterQueries });
  }, [initializedFilterQueries]);

  /**
   * query onChange
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterQueries({ ...filterQueries, keyword: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      // make query into query string
      const url = createSearchUrlWithQueries(filterQueries);
      router.push(url);
      // TODO: api 호출
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form className="w-full flex gap-2" onSubmit={handleSubmit}>
      <Input
        className="border-mnv-gray-10"
        onChange={handleChange}
        value={filterQueries.keyword}
      />
      {/* TODO: 아이콘으로 교체 */}
      <Button className="border-mnv-gray-10" type="submit">
        검색
      </Button>
    </form>
  );
}
