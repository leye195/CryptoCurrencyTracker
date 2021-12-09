import { useState, useRef, useEffect, useCallback } from 'react';
import { useQuery } from 'react-query';
import { getCoins, getNewsPosts } from 'apis';
import { getLocalStorage } from 'utils';
import { CoinType } from 'types/coin';
import { NewsType } from 'types/news';
import HomePresentation from './HomePresentation';

export default function HomeContainer() {
  const [currentDot, setCurrentDot] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(448);
  const [updateStatus, setUpdateStatus] = useState(false);
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

  const saveFavorite = (coin: CoinType, key = 'favorites') => {
    const favs = getLocalStorage(key);
    if (!favs) localStorage.setItem(key, JSON.stringify([coin]));
    else localStorage.setItem(key, JSON.stringify([...JSON.parse(favs), coin]));
  };

  const removeFavorite = (coin: CoinType, key = 'favorites') => {
    const favs = getLocalStorage(key);
    if (favs) {
      const coins = JSON.parse(favs || '[]').filter(
        (item: CoinType) => item.id !== coin.id,
      );
      localStorage.setItem(key, JSON.stringify(coins));
    }
  };

  const handleFavorite = (coin: CoinType) => () => {
    const favs = JSON.parse(getLocalStorage('favorites') || '[]').filter(
      (item: CoinType) => item.id === coin.id,
    );

    if (favs.length === 0) saveFavorite(coin);
    else removeFavorite(coin);
    setUpdateStatus(!updateStatus);
  };

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
      handleFavorite={handleFavorite}
      newsRef={newsRef}
    />
  );
}
