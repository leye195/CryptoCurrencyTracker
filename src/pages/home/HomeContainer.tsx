import { useQuery } from 'react-query';
import { getCoins, getNewsPosts } from 'apis';
import { CoinType } from 'types/coin';
import { NewsType } from 'types/news';
import HomePresentation from './HomePresentation';

export default function HomeContainer() {
  const { data, isLoading, isFetched } = useQuery<unknown, unknown, CoinType[]>(
    'coins',
    async () => {
      const res = await getCoins();
      return res.data;
    },
  );

  const {
    data: news,
    isLoading: isNewsLoading,
    isFetched: isNewsFetched,
  } = useQuery<NewsType>('news', async () => {
    const res = await getNewsPosts();
    return res.data;
  });

  return (
    <HomePresentation
      isLoading={isLoading || isNewsLoading}
      isFetched={isFetched || isNewsFetched}
      coins={data}
      news={news}
    />
  );
}
