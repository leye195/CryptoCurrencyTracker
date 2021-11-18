import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { getCoinOHLC } from 'apis';
import { CoinOHLCType, DetailParams } from 'types/coin';

import ChartPresentation from './ChartPresentation';

const ChartContainer = () => {
  const { coinId }: DetailParams = useParams();
  const { data, isLoading, isFetched } = useQuery<CoinOHLCType[]>(
    ['coinOHLC', coinId],
    async () => {
      const res = await getCoinOHLC(coinId as string);
      return res.data;
    },
  );

  return (
    <ChartPresentation
      isLoading={isLoading}
      isFetched={isFetched}
      data={data}
    />
  );
};

export default ChartContainer;
