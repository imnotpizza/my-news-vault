import { TNewsItem } from '@/types';
import NewsCard from '@/components/organisms/search/NewsCard';

interface IProps {
  newsList: TNewsItem[];
}

/**
 * 뉴스 리스트 4XN으로 gird 형식으로 렌더링
 * @returns
 */
export default function NewsGridList({ newsList }: IProps) {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <div className="grid grid-cols-1 gap-5 w-full max-w-5xl px-5 mb-7 md:grid-cols-3 lg:grid-cols-4">
        {newsList.map((item) => (
          <NewsCard newsItem={item} key={item.newsId} />
        ))}
      </div>
    </div>
  );
}
