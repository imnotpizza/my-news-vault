'use client';

import QUERY_KEY from '@/queries/keys';
import { queryClient } from '@/queries/queryClient';

export default function NewsSearchPage14() {
  const query = queryClient.getQueryData([QUERY_KEY.BING_NEWS_SEARCH, null]);
  return <div></div>;
}
