import Meta from '@/components/common/Meta';
import NewsSearchPage from '@/components/search/NewsSearchPage';
import React from 'react';
import { GetServerSideProps } from 'next';
import { UserInfoProvider } from '@/utils/userInfoProvider';
import Layout from '@/components/layout';
import { getPrefetch, getUserInfo, initialPageProps } from '@/utils/serverside';
import { TPageProps } from '@/types';

const NewsSearch = ({ status, userInfo }) => {
  return (
    <UserInfoProvider initialUserInfo={userInfo || null}>
      <Layout>
        <Meta title={'keyword'} />
        <NewsSearchPage category={'All'} />
      </Layout>
    </UserInfoProvider>
  );
};

export const getServerSideProps: GetServerSideProps<TPageProps> = async (context) => {
  try {
    // FIXME: 리팩토링 필요
    const res1 = await getUserInfo(context, initialPageProps);
    const res2 = await getPrefetch(context, res1);
    return {
      props: res2,
    };
  } catch (e) {
    return {
      props: {
        status: false,
        userInfo: null,
      },
    };
  }
};

// TODO: 나중에 삭제
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   try {
//     const { authToken } = context.req.cookies;

//     if (authToken) {
//       const verifiedToken = await getDecodedUserInfoByToken(authToken);
//       const { name, picture, email } = verifiedToken;
//       const userInfo: TUserInfo = {
//         displayName: name,
//         photoURL: picture,
//         email,
//       };

//       // prefetch scrappedNewsList
//       await prefetchScrappedNewsList(email);
//       return {
//         props: {
//           status: true,
//           dehydratedState: dehydrate(queryClient),
//           userInfo,
//         },
//       };
//     } else {
//       return {
//         props: {
//           status: false,
//           userInfo: null,
//         },
//       };
//     }
//   } catch (e) {
//     return {
//       props: {
//         status: false,
//         userInfo: null,
//       },
//     };
//   }
// };

export default NewsSearch;
