import styled from 'styled-components';
import React from 'react';
import { queryClient } from '@/queries/queryClient';
import { bingNewsFetchQueryKey } from '@/queries/useBingNewsFetch';

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

const QueryInput = ({ setQuery }) => {
  const [queryForm, setQueryForm] = React.useState({
    query: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryForm({
      ...queryForm,
      [e.target.name]: e.target.value,
    });
  };

  const onClickSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    queryClient.invalidateQueries([bingNewsFetchQueryKey]);
    setQuery(queryForm.query);
    e.preventDefault();
  };

  return (
    <Container>
      <Input name="query" value={queryForm.query} onChange={onChange} />
      <button onClick={onClickSearch}>call api</button>
    </Container>
  );
};

export default QueryInput;
