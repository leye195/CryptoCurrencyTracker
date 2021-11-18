import { useQuery } from 'react-query';
import { getCoins } from 'apis';
import { CoinType } from 'types/coin';
import HomePresentation from './HomePresentation';

export default function HomeContainer() {
  const { data, isLoading, isFetched } = useQuery<unknown, unknown, CoinType[]>(
    'coins',
    async () => {
      const res = await getCoins();
      return res.data;
    },
  );

  return (
    <HomePresentation
      isLoading={isLoading}
      isFetched={isFetched}
      coins={data}
    />
  );
}
