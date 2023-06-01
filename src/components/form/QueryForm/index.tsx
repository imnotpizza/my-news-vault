import ImageButton from '@/components/form/ImageButton';
import SearchInput from '@/components/form/SearchInput';
import { useRouter } from 'next/router';
import React from 'react';

const QueryForm = ({ query }) => {
  const router = useRouter();
  const [queryForm, setQueryForm] = React.useState({
    query,
  });

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
    <div>
      <form onSubmit={onSubmit}>
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
