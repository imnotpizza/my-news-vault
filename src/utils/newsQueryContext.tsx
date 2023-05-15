import React, { useEffect } from 'react';

const newsQueryContext = React.createContext({
  query: '',
  setQuery: (query: string) => {},
});

const NewsQueryProvider = ({ children }: any) => {
  const [query, setQuery] = React.useState('');

  return (
    <newsQueryContext.Provider value={{ query, setQuery }}>{children}</newsQueryContext.Provider>
  );
};

export { newsQueryContext, NewsQueryProvider };
