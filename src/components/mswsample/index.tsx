'use client';

import React from 'react';
import { queryClient } from '@/queries/queryClient';
import useSampleQuery, { TUser } from './useSampleQuery';

const MswSample = () => {
  const queryStates = useSampleQuery({});
  console.log('######### queryStates', queryStates.isSuccess, queryStates.data);
  return (
    <div>
      <h1>sample</h1>
      <div>
        {queryStates.isLoading && <div data-testid="loading-ui">Loading...</div>}
        {queryStates.isError && <div data-testid="error-ui">error</div>}
        {queryStates.isSuccess && (
          <div>
            {queryStates?.data.map((item) => (
              <div key={item.id} data-testid="card">
                <p>{item.username}</p>
                <button
                  onClick={() => {
                    queryClient.setQueryData<TUser[]>(['mswtest'], (oldData) => {
                      return oldData.filter((oldItem) => oldItem.id !== item.id);
                    });
                  }}
                >
                  delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MswSample;
