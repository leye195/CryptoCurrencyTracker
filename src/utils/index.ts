import { CoinType } from 'types/coin';

export const numberFormat = (value: number, isPrice: boolean) => {
  const options = isPrice ? { style: 'currency', currency: 'USD' } : {};
  return new Intl.NumberFormat('en-US', options).format(value);
};

export const convertPeriod = (period?: string) => {
  switch (period) {
    case '7d':
      return 7;
    case '1m':
      return 30;
    case '3m':
      return 90;
    case '1y':
      return 364;
    default:
      return 7;
  }
};

export const capitalize = (word: string) => {
  return word[0].toUpperCase() + word.slice(1);
};

export const summarizeTags = (tags: string) => {
  return tags.split('|').slice(0, 3).join(' | ');
};

export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data;
};

export const checkIsFavorite = (id: string) => {
  const data = JSON.parse(getLocalStorage('favorites') || '[]').filter(
    (item: CoinType) => item.id === id,
  );

  return data.length > 0;
};
