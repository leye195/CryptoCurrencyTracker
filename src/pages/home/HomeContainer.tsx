import { getCoins } from 'apis';
import React, { useEffect, useState } from 'react';
import { CoinType } from 'types/coin';
import HomePresentation from './HomePresentation';

export default function HomeContainer() {
  const [coins, setCoins] = useState<CoinType[]>([]);
  useEffect(() => {
    getCoins().then((res) => {
      const { data } = res;
      setCoins(data.slice(0, 5));
    });
  }, []);
  return <HomePresentation coins={coins} />;
}
