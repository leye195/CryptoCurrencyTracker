import { useParams, useLocation } from 'react-router';
import { useQuery } from 'react-query';
import { getCoin, getPrice } from 'apis';
import { CoinInfoType, CoinPriceType, DetailParams } from 'types/coin';
import DetailPresentation from './DetailPresentation';

export default function DetailContainer() {
  const { coinId }: DetailParams = useParams();
  const { state } = useLocation();

  const {
    data: coinInfo,
    isLoading: isCoinInfoLoading,
    isFetched: isCoinInfoFetched,
  } = useQuery<CoinInfoType>(['coinInfo', coinId], async () => {
    const res = await getCoin(coinId as string);
    return res.data;
  });

  const {
    data: coinPrice,
    isLoading: isCoinPriceLoading,
    isFetched: isCoinPriceFetched,
  } = useQuery<CoinPriceType>(
    ['coinPrice', coinId],
    async () => {
      const res = await getPrice(coinId as string);
      return res.data;
    },
    {
      refetchInterval: 5000,
    },
  );

  return (
    <DetailPresentation
      name={state?.name}
      isFetched={isCoinInfoFetched && isCoinPriceFetched}
      isLoading={isCoinInfoLoading || isCoinPriceLoading}
      coinInfo={coinInfo}
      coinPrice={coinPrice}
    />
  );
}
