// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)

import { Meta } from '@storybook/react';
import { useState } from 'react';
import useInfiniteScroll, { InfiniteScrollWrapper } from '.';
import Card from '@/components/atoms/CardUI';
import { useInfiniteQuery } from '@tanstack/react-query';
import TestProviders from '@/components/providers/withTestProviders';
import { mswTestHandler } from '@/msw/handler/newsHandler';

// 1. Post 타입 정의
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const MAX_PAGE = 5;

const ItemCard = ({
  post,
}: {
  post: {
    id: number;
    title: string;
    body: string;
  };
}) => {
  return (
    <Card>
      <Card.Content>
        <Card.Title>{post.title}</Card.Title>
        <Card.Description>{post.body}</Card.Description>
      </Card.Content>
    </Card>
  );
};

/**
 * InfiniteScroll은 무한스크롤을 구현할 수 있는 컴포넌트입니다. 무한스크롤 구현을 위한 Wrapper와
 *
 */
const meta: Meta<any> = {
  title: 'Atoms/InfiniteScroll',
  component: InfiniteScrollExample,
  argTypes: {},
  parameters: {
    msw: {
      handlers: [...mswTestHandler],
    },
  },
};
export default meta;

/**
 * Card ui 사용
 */
export function InfiniteScrollExample() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // enabled: Maxpage 도달하면 False로
  const enabled = !isLoading && page <= MAX_PAGE;
  const fetch2 = async ({ page: newPage }: any) => {
    setIsLoading(true);
    console.log('##################################### 1111');
    const apiRes = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${newPage}&_limit=10`,
    );
    const res = await apiRes.json();
    console.log('##################################### 2222', res);
    setPosts((prev) => [...prev, ...res]);
    setPage((p) => p + 1);
    setIsLoading(false);
  };
  // useInfiniteScroll 사용, ref 획득
  const ref = useInfiniteScroll({
    enabled,
    onTriggered: fetch2,
    page,
  });

  return (
    <div className="w-full h-[500px] my-5">
      {/* 획득한 ref를 Wrapper에 주입 */}
      <InfiniteScrollWrapper ref={ref} isLoading={isLoading}>
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <ItemCard key={post.id} post={post} />
          ))}
        </div>
      </InfiniteScrollWrapper>
    </div>
  );
}

/**
 * InfiniteScroll + React Query 연동 예제 (기능은 동일)
 */
export function InfiniteScrollExampleWithReactQuery() {
  return (
    <TestProviders>
      <QueryInfiniteScroll />
    </TestProviders>
  );
}
function QueryInfiniteScroll() {
  // react-query의 useInfiniteQuery를 사용한 데이터 페칭
  const fetchPosts = async ({ pageParam = 1 }) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=10`,
    );
    const data = (await response.json()) as Post[];
    return { data, nextPage: pageParam + 1, isLastPage: pageParam >= MAX_PAGE };
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status, isLoading } =
    useInfiniteQuery({
      queryKey: ['posts'],
      queryFn: fetchPosts,
      getNextPageParam: (lastPage) => (lastPage.isLastPage ? undefined : lastPage.nextPage),
      initialPageParam: 1,
    });

  // useInfiniteScroll 커스텀 훅 사용
  const enabled = hasNextPage && !isFetchingNextPage;
  const ref = useInfiniteScroll({
    enabled,
    onTriggered: fetchNextPage,
    page: data?.pages.length || 0,
  });

  if (isLoading) return <p>Loading...</p>;
  if (status === 'error') return <p>Error loading posts.</p>;

  return (
    <div className="w-full h-[500px] my-5">
      <InfiniteScrollWrapper ref={ref} isLoading={isFetchingNextPage}>
        <div className="flex flex-col gap-4">
          {data?.pages.map((page) =>
            page.data.map((post: any) => <ItemCard key={post.id} post={post} />),
          )}
        </div>
      </InfiniteScrollWrapper>
    </div>
  );
}
