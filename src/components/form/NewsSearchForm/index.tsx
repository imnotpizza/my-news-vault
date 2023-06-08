import SearchInput from '@/components/form/SearchInput';
import { hasSpecialCharacters } from '@/utils';
import NewsSearchButton from '@/views/newsSearchForm/NewsSearchButton';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 483px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .search-button {
    margin-left: .5rem;
  }
`;

const NewsSearchForm = ({ query }) => {
  const router = useRouter();
  const [queryForm, setQueryForm] = React.useState({
    query,
  });

  const isValidForm = useMemo(() => hasSpecialCharacters(queryForm.query), [queryForm.query]);
  const isQueryEmpty = useMemo(() => queryForm.query === '', [queryForm.query]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryForm({
      ...queryForm,
      [e.target.name]: e.target.value,
    });
  };

  const onClickSearch = () => {
    if (queryForm.query === '') return;
    router.push(`?query=${queryForm.query}`);
  };

  const onKeyDown = (e) => {
    if (e.code === 'Enter') {
      onClickSearch();
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClickSearch();
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <SearchInput name="query" value={queryForm.query} onChange={onChange} />
        <div className='search-button'>
          <NewsSearchButton onKeyDown={onKeyDown} disabled={!isValidForm || isQueryEmpty} />
        </div>
      </Form>
    </Container>
  );
};

export default NewsSearchForm;
