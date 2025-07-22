import React from 'react';
import MyComp from '@/components/MyComp';

const getRandomData = () => {
  // Simulate fetching data from an API
  return Math.floor(Math.random() * 1000);
};

export default function RSC({ value }) {
  const res = getRandomData();
  return (
    <div>
      <MyComp value={res} />
    </div>
  );
}
