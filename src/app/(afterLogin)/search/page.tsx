import React from 'react';
import SearchPageView from '@/components/templates/search/SearchPageView';
import { initialPageProps } from '@/constants';
import { getDehydratedStateInServerside } from '@/prefetch/scarp';
import { getUserInfoInServerside } from '@/prefetch/userInfo';
import { useHydrateAtoms } from 'jotai/utils';
import { authAtom } from '@/hooks/useAuth';
import JotaiHydrateProvider from '@/components/etc/JotaiHydrateProvider';

// const fetchValues = async () => {
//   const res = await axios.get('http://localhost:3000/api/cache-test');
//   return res.data;
// };

// 2
export default async function SearchPage(props) {
  const { query } = props;
  // TODO: prefetchQuery or getQueryData 호출
  const prefetchedUser = await getUserInfoInServerside(initialPageProps);
  const res2 = await getDehydratedStateInServerside(prefetchedUser);
  console.log(res2);
  // prefetchedUserInfo={prefetchedUser.userInfo || null}
  return (
    <JotaiHydrateProvider prefetchedUserInfo={prefetchedUser.userInfo || null}>
      <SearchPageView />
    </JotaiHydrateProvider>
  );
}

// type Props = {
//   params: { id: string };
//   searchParams: { [key: string]: string | string[] | undefined };
// };

// export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
//   // FIXME: fetchQuery 호출
//   const res = await fetchBingNews(searchParams.query as string, 0);
//   const seoVals = res.value.map((item) => {
//     return {
//       name: item.name,
//       description: item.description,
//       image: item.image?.thumbnail?.contentUrl,
//     };
//   });
//   const first = seoVals[0];
//   // TODO 여기에 seo 데이터 초기화
//   return createMetadataObj({
//     title: first.name,
//     description: first.description,
//     openGraph: {
//       title: first.name,
//       description: first.description,
//       images: [{ url: first.image }],
//     },
//   });
// }
