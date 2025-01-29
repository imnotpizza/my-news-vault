import { memo, useContext } from 'react';
import dynamic from 'next/dynamic';
import { TNewsItem } from '@/types';
import { userInfoContext, IUserInfoContext } from '@/context/userInfoContext';

const NewsCardThumbnail = dynamic(() => import('@/components/common/NewsCardThumbnail'));
const NewsCardProvider = dynamic(() => import('@/components/common/NewsCardProvider'));
const NewsCardTitle = dynamic(() => import('@/components/common/NewsCardTitle'));
const NewsCardDesc = dynamic(() => import('@/components/common/NewsCardDesc'));
const NewsCardLink = dynamic(() => import('@/components/common/NewsCardLink'));
const NewsCardPublishedDate = dynamic(
  () => import('@/components/common/NewsCardPublishedDate'),
);

const NewsCard = ({ item }: { item: TNewsItem }) => {
  const { isScrapped, title, thumbnail, description, url, providerIcon, datePublished } = item;
  const { userInfo, isSignin } = useContext<IUserInfoContext>(userInfoContext);

  const onClickScarp = async () => {
    if (!isSignin) {
      alert('스크랩 기능은 로그인 후 사용해주세요.');
    }
  };

  const onClickUnscrap = async () => {};

  return (
    <div className="bg-white shadow-md rounded-sm p-2 relative z-10 w-56 h-96 lg:w-60 lg:h-96 md:w-48 md:h-80 sm:w-full sm:h-36 flex flex-col sm:flex-row sm:items-center">
      <NewsCardThumbnail src={thumbnail} alt={title} className="w-full sm:w-1/3" />
      <div className="flex flex-col justify-start w-full px-5 sm:px-3">
        <div className="mt-2 sm:mt-0">
          <NewsCardProvider src={providerIcon} alt={'provider'} />
        </div>
        <div className="mt-2">
          <NewsCardTitle>{title}</NewsCardTitle>
        </div>
        <div className="mt-1">
          <NewsCardDesc>{description}</NewsCardDesc>
        </div>
        <div className="mt-1">
          <NewsCardLink>{url}</NewsCardLink>
        </div>
        <div className="flex justify-between items-center w-full absolute bottom-2 sm:static mt-5">
          <NewsCardPublishedDate>{datePublished}</NewsCardPublishedDate>
        </div>
      </div>
    </div>
  );
};

export default memo(NewsCard);
