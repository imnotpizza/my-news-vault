import SearchInput from '@/components/form/SearchInput';
import { responsive } from '@/styles/responsive';
import { hasSpecialCharacters } from '@/utils';
import AlertText from '@/views/newsSearchForm/AlertText';
import NewsSearchButton from '@/views/newsSearchForm/NewsSearchButton';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;

const Form = styled.form`
  max-width: 483px;
  min-width: 240px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .search-button {
    margin-left: 0.5rem;
  }

  ${responsive.mobile} {
    width: 100%;
    min-width: 288px;
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
        <div className="search-button">
          <NewsSearchButton onKeyDown={onKeyDown} disabled={!isValidForm || isQueryEmpty} />
        </div>
        <AlertText show={!isValidForm}>특수문자는 입력할 수 없습니다.</AlertText>
      </Form>
    </Container>
  );
};

export default NewsSearchForm;
