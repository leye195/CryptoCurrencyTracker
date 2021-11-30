import { useState, useRef, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getCoins, getNewsPosts } from 'apis';
import { CoinType } from 'types/coin';
import { NewsType } from 'types/news';
import HomePresentation from './HomePresentation';

export default function HomeContainer() {
  const [currentDot, setCurrentDot] = useState(0);
  const timerRef: { current: NodeJS.Timeout | null } = useRef(null);
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

  const handleDot = (index: number) => () => {
    setCurrentDot(index);
  };

  useEffect(() => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setCurrentDot((prev) => (prev + 1) % 5);
      }, 5500);
    }
    return () => {
      clearInterval(timerRef.current as NodeJS.Timeout);
    };
  }, []);

  return (
    <HomePresentation
      isLoading={isLoading || isNewsLoading}
      isFetched={isFetched || isNewsFetched}
      coins={data}
      news={news}
      currentDot={currentDot}
      handleDot={handleDot}
    />
  );
}
