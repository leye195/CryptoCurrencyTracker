import { getCoin, getPrice } from 'apis';
import { useEffect, useState, useCallback } from 'react';
import { useParams, useLocation } from 'react-router';
import { CoinInfoType, CoinPriceType } from 'types/coin';
import DetailPresentation from './DetailPresentation';

type RouteParams = {
  coinId?: string;
};

export default function DetailContainer() {
  const { coinId }: RouteParams = useParams();
  const { state } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [coinInfo, setCoinInfo] = useState<CoinInfoType>();
  const [coinPrice, setCoinPrice] = useState<CoinPriceType>();

  const getCoinInfo = useCallback(async () => {
    setIsLoading(true);
    const res = await Promise.all([
      getCoin(coinId as string),
      getPrice(coinId as string),
    ]);
    setCoinInfo(res[0].data);
    setCoinPrice(res[1].data);
    setIsLoading(false);
  }, [coinId]);

  useEffect(() => {
    coinId && getCoinInfo();
  }, [coinId, getCoinInfo]);

  return (
    <DetailPresentation
      name={state?.name}
      isLoading={isLoading}
      coinInfo={coinInfo}
      coinPrice={coinPrice}
    />
  );
}
