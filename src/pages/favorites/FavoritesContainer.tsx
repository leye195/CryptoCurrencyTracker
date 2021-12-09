import { useState, useEffect } from 'react';
import { CoinType } from 'types/coin';
import { getLocalStorage } from 'utils';
import FavoritesPresentation from './FavoritesPresentation';

const FavoritesContainer = () => {
  const [coins, setCoins] = useState<CoinType[]>([]);

  useEffect(() => {
    const data = JSON.parse(getLocalStorage('favorites') || '[]');
    setCoins(data);
  }, []);

  const saveFavorite = (coin: CoinType, key = 'favorites') => {
    const favs = getLocalStorage(key);
    localStorage.setItem(
      key,
      JSON.stringify([...JSON.parse(favs || '[]'), coin]),
    );
    setCoins([...JSON.parse(favs || '[]'), coin]);
  };

  const removeFavorite = (coin: CoinType, key = 'favorites') => {
    const favs = getLocalStorage(key);
    if (favs) {
      const data = JSON.parse(favs || '[]').filter(
        (item: CoinType) => item.id !== coin.id,
      );
      localStorage.setItem(key, JSON.stringify(data));
      setCoins(data);
    }
  };

  const handleFavorite = (coin: CoinType) => () => {
    const favs = JSON.parse(getLocalStorage('favorites') || '[]').filter(
      (item: CoinType) => item.id === coin.id,
    );

    if (favs.length === 0) saveFavorite(coin);
    else removeFavorite(coin);
  };

  return (
    <FavoritesPresentation coins={coins} handleFavorite={handleFavorite} />
  );
};

export default FavoritesContainer;
