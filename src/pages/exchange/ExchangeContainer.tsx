import { useParams } from 'react-router';

import { useQuery } from 'react-query';
import { getExchange, getMarketListOnExchange } from 'apis';
import { DetailParams, ExchangeInfoType, MarketType } from 'types/exchange';

import ExchangePresentation from './ExchangePresentation';

const ExchangeContainer = () => {
  const { exchangeId }: DetailParams = useParams();

  const {
    data: exchangeInfo,
    isLoading: isExchangeInfoLoading,
    isFetched: isExchangeInfoFetched,
  } = useQuery<ExchangeInfoType>(
    ['exchangeInfo', exchangeId],
    async () => {
      const res = await getExchange(exchangeId as string);
      return res.data;
    },
    {
      refetchInterval: 10000,
    },
  );

  const {
    data: exchangeMarkets,
    isLoading: isExchangeMarketLoading,
    isFetched: isExchangeMarketFetched,
  } = useQuery<MarketType[]>(
    ['exchangeMarkets', exchangeId],
    async () => {
      const res = await getMarketListOnExchange(exchangeId as string);
      return res.data;
    },
    {
      refetchInterval: 10000,
    },
  );

  return (
    <ExchangePresentation
      isLoading={isExchangeInfoLoading || isExchangeMarketLoading}
      isFetched={isExchangeInfoFetched || isExchangeMarketFetched}
      exchangeInfo={exchangeInfo}
      exchangeMarkets={exchangeMarkets}
    />
  );
};

export default ExchangeContainer;
