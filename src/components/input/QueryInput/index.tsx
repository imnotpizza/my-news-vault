import styled from 'styled-components';
import React from 'react';

/**
 * 뉴스 검색어 입력
 */
const Container = styled.div`
  width: 100%;
`;

const Input = styled.input.attrs({ type: 'text' })`
  width: 300px;
  height: 30px;
`;

const QueryInput = () => {
  const [query, setQuery] = React.useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  return (
    <Container>
      <Input value={query} onChange={onChange} />
      <button>call api</button>
    </Container>
  );
};

export default QueryInput;
