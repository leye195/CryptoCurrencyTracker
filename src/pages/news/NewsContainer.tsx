import { useQuery } from 'react-query';
import { getNewsPosts } from 'apis';
import { NewsType } from 'types/news';
import NewsPresentation from './NewsPresentation';

const NewsContainer = () => {
  const {
    data: news,
    isLoading: isNewsLoading,
    isFetched: isNewsFetched,
  } = useQuery<NewsType>('news', async () => {
    const res = await getNewsPosts();
    return res.data;
  });

  return (
    <NewsPresentation
      news={news}
      isLoading={isNewsLoading}
      isFetched={isNewsFetched}
    />
  );
};

export default NewsContainer;
