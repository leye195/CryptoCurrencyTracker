import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.coinpaprika.com/v1/',
});

export const getCoins = () => api.get('coins');

export const getCoin = (id: string) => api.get(`coins/${id}`);

export const getPrice = (id: string) => api.get(`tickers/${id}`);

export const getCoinOHLC = (id: string) => {
  const end = Math.floor(Date.now() / 1000);
  const start = end - 60 * 60 * 24 * 7;
  return api.get(`/coins/${id}/ohlcv/historical?start=${start}&end=${end}`);
};
