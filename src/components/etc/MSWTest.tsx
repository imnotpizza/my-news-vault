'use client';

import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

export default function MSWTest() {
  const [enabled, setEnabled] = React.useState(true);
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchData,
    enabled,
  });

  useEffect(() => {
    setTimeout(() => {
      setEnabled(true);
    }, 1000);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <button
        onClick={() => {
          refetch();
        }}
      >
        refetch
      </button>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
