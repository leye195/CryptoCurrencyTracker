import { useState, useRef, useEffect, useCallback } from 'react';
import { useQuery } from 'react-query';
import { getCoins, getNewsPosts } from 'apis';
import { CoinType } from 'types/coin';
import { NewsType } from 'types/news';
import HomePresentation from './HomePresentation';

export default function HomeContainer() {
  const [currentDot, setCurrentDot] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(448);
  const timerRef: { current: NodeJS.Timeout | null } = useRef(null);
  const newsRef = useRef<HTMLDivElement>(null);
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

  const handleScroll = useCallback(() => {
    const width = newsRef.current?.offsetWidth || currentWidth;
    setCurrentWidth(width);
  }, [currentWidth]);

  useEffect(() => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setCurrentDot((prev) => (prev + 1) % 5);
      }, 5500);
    }

    if (newsRef.current) {
      handleScroll();
      window.addEventListener('resize', handleScroll);
    }

    return () => {
      clearInterval(timerRef.current as NodeJS.Timeout);
    };
  }, [handleScroll, newsRef]);

  return (
    <HomePresentation
      isLoading={isLoading || isNewsLoading}
      isFetched={isFetched || isNewsFetched}
      coins={data}
      news={news}
      currentWidth={currentWidth}
      currentDot={currentDot}
      handleDot={handleDot}
      newsRef={newsRef}
    />
  );
}
