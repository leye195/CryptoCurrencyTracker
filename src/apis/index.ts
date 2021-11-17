import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.coinpaprika.com/v1/',
});

export const getCoins = () => api.get('coins');

export const getCoin = (id: string) => api.get(`coins/${id}`);

export const getPrice = (id: string) => api.get(`tickers/${id}`);

export const getCoinOHLC = (id: string, start: string, limit = 30) =>
  api.get(`/coins/${id}/ohlcv/historical?start=${start}&limit=${limit}`);
