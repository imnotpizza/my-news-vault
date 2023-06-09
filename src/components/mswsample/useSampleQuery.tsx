import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const CACHE_TIME = 1000 * 60 * 1;
export const ITEMS_PER_PAGE = 100;

export const apiPath = 'https://jsonplaceholder.typicode.com/users';

const fetchData = async (pageParam, limit): Promise<TUser[]> => {
  const res = await axios.get(`${apiPath}?_page=${pageParam}&_limit=${limit || ITEMS_PER_PAGE}`);
  return res.data;
};

const useSampleQuery = ({ limit = ITEMS_PER_PAGE, options = {} }) => {
  return useQuery<Awaited<ReturnType<typeof fetchData>>, Error>(
    ['mswtest'],
    ({ pageParam = 1 }) => fetchData(pageParam, limit),
    {
      refetchOnWindowFocus: false,
      staleTime: CACHE_TIME,
      cacheTime: CACHE_TIME,
      retry: false,
      onError: (error) => {
        console.log('error', error);
      },
      ...options,
    },
  );
};

export default useSampleQuery;
