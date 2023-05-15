'use client';

import styled from 'styled-components';
import React, { KeyboardEventHandler, memo } from 'react';
import { useRouter } from 'next/navigation';
import { newsQueryContext } from '@/utils/newsQueryContext';

/**
 * 뉴스 검색어 입력
 */
const Container = styled.div`
  width: 100%;
`;

const Input = styled.input.attrs({ type: 'text' })`
  width: 300px;
  height: 30px;
  margin-bottom: 100px;
`;

const QueryInput = ({ query }) => {
  const { setQuery } = React.useContext(newsQueryContext);
  const router = useRouter();
  const [queryForm, setQueryForm] = React.useState({
    query,
  });

  console.log('########### query,', query);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryForm({
      ...queryForm,
      [e.target.name]: e.target.value,
    });
  };

  const onClickSearch = () => {
    if (queryForm.query === '') return;
    setQuery(queryForm.query);
    router.push(`${window.location.pathname}?q=${queryForm.query}`);
  };

  return (
    <Container>
      <Input
        name="query"
        value={queryForm.query}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.code === 'Enter') {
            onClickSearch();
          }
        }}
      />
      <button onClick={onClickSearch}>call api</button>
    </Container>
  );
};

export default memo(QueryInput);
