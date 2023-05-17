import ImageButton from '@/components/form/ImageButton';
import SearchInput from '@/components/form/SearchInput';
import { newsQueryContext } from '@/utils/newsQueryContext';
import React, { useEffect } from 'react';

const QueryForm = () => {
  const { setQuery } = React.useContext(newsQueryContext);
  const [queryForm, setQueryForm] = React.useState({
    query: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryForm({
      ...queryForm,
      [e.target.name]: e.target.value,
    });
  };

  const onClickSearch = () => {
    if (queryForm.query === '') return;
    setQuery(queryForm.query);
  };

  const onKeyDown = (e) => {
    if (e.code === 'Enter') {
      onClickSearch();
    }
  };

  return (
    <div>
      <form>
        <div>
          <SearchInput name="query" value={queryForm.query} onChange={onChange} />
        </div>
        <div>
          <ImageButton onClick={onClickSearch} onKeyDown={onKeyDown} />
        </div>
      </form>
    </div>
  );
};

export default QueryForm;
