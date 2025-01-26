import { TNewsItem } from "@/types";
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
    <div className="grid grid-cols-4 gap-4 w-[482px]">
      {newsList.map((item) => (
        <NewsCard newsItem={item} key={item.newsId} />
      ))}
    </div>
  );
}
