import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { getCoinOHLC } from 'apis';
import { CoinOHLCType, DetailParams } from 'types/coin';
import PricePresentation from './PricePresentation';

const PriceContainer = () => {
  const { coinId }: DetailParams = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [period, setPeriod] = useState('7d');

  const { data, isLoading } = useQuery<CoinOHLCType[]>(
    ['coinOHLC', coinId, searchParams.get('period')],
    async () => {
      const res = await getCoinOHLC(
        coinId as string,
        searchParams.get('period') || '7d',
      );
      return res.data;
    },
  );

  const handlePeriod = (periodInput: string) => () => {
    setSearchParams(`period=${periodInput}`);
  };

  useEffect(() => {
    const periodSelect = searchParams.get('period') || '7d';
    setPeriod(periodSelect);
  }, [searchParams]);

  return (
    <PricePresentation
      data={data}
      isLoading={isLoading}
      handlePeriod={handlePeriod}
      period={period}
    />
  );
};

export default PriceContainer;
