import { getMarketsByCoin } from 'apis';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { CoinMarketType, DetailParams } from 'types/coin';

import MarketPresentation from './MarketPresentation';

const MarketContainer = () => {
  const { coinId }: DetailParams = useParams();

  const { data, isLoading } = useQuery<CoinMarketType[]>(
    ['markets', coinId],
    async () => {
      const res = await getMarketsByCoin(coinId as string);
      return res.data;
    },
  );
  return <MarketPresentation isLoading={isLoading} data={data} />;
};

export default MarketContainer;
