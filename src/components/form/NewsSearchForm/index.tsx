import SearchInput from '@/components/form/SearchInput';
import { responsive } from '@/styles/responsive';
import { TBingNewsQuery } from '@/types';
import { hasSpecialCharacters } from '@/utils';
import AlertText from '@/views/newsSearchForm/AlertText';
import NewsSearchButton from '@/views/newsSearchForm/NewsSearchButton';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 20px;
`;

const Form = styled.form`
  max-width: 483px;
  min-width: 240px;
  height: 40px;
  position: relative;
  .search-button {
    margin-left: 0.5rem;
  }

  ${responsive.mobile} {
    width: 100%;
    min-width: 288px;
  }
`;
// input 최대 길이
const INPUT_MAX_LENGTH = 20;

const NewsSearchForm = ({ query }) => {
  const router = useRouter();
  const [inputText, setInputText] = useState<TBingNewsQuery['query']>(query);

  const isValidForm = useMemo(
    () => hasSpecialCharacters(inputText) || inputText.length <= INPUT_MAX_LENGTH,
    [inputText],
  );
  const isQueryEmpty = useMemo(() => inputText === '', [inputText]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const onClickSearch = () => {
    if (inputText === '') return;
    router.push(`?query=${inputText}`);
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
    <Container className="flex-center">
      <Form onSubmit={onSubmit} className="flex-center">
        <SearchInput name="query" value={inputText} onChange={onChange} />
        <div className="search-button">
          <NewsSearchButton onKeyDown={onKeyDown} disabled={!isValidForm || isQueryEmpty} />
        </div>
        <AlertText show={!isValidForm}>특수문자는 입력할 수 없습니다.</AlertText>
      </Form>
    </Container>
  );
};

export default NewsSearchForm;
