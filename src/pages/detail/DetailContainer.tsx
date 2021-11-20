import { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router';
import { useQuery } from 'react-query';
import { getCoin, getCoinTweet, getPrice } from 'apis';
import { CoinInfoType, CoinPriceType, DetailParams } from 'types/coin';
import DetailPresentation from './DetailPresentation';

export default function DetailContainer() {
  const { coinId }: DetailParams = useParams();
  const { state, pathname } = useLocation();
  const navigator = useNavigate();

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

  const {
    data: tweets,
    isLoading: isTweetLoading,
    isFetched: isTweetFetched,
  } = useQuery(['coinTweet', coinId], async () => {
    const res = await getCoinTweet(coinId as string);
    return res.data;
  });

  useEffect(() => {
    if (pathname !== `/${coinId}/price` || pathname !== `/${coinId}/chart`) {
      navigator(`./price`, { replace: true });
    }
  }, [pathname, coinId, navigator]);

  return (
    <DetailPresentation
      name={state?.name}
      isFetched={isCoinInfoFetched && isCoinPriceFetched && isTweetFetched}
      isLoading={isCoinInfoLoading || isCoinPriceLoading || isTweetLoading}
      coinInfo={coinInfo}
      coinPrice={coinPrice}
      tweets={tweets}
    />
  );
}
