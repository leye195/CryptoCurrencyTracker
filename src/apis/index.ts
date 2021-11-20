import axios from 'axios';
import { convertPeriod } from 'utils';

const api = axios.create({
  baseURL: 'https://api.coinpaprika.com/v1/',
});

export const getCoins = () => api.get('coins');

export const getCoin = (id: string) => api.get(`coins/${id}`);

export const getPrice = (id: string) => api.get(`tickers/${id}`);

export const getCoinOHLC = (id: string, period?: string) => {
  const end = Math.floor(Date.now() / 1000);
  const start = end - 60 * 60 * 24 * convertPeriod(period);
  return api.get(`/coins/${id}/ohlcv/historical?start=${start}&end=${end}`);
};
