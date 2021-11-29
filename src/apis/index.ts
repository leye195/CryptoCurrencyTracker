import axios from 'axios';
import { convertPeriod } from 'utils';

const api = axios.create({
  baseURL: 'https://api.coinpaprika.com/v1/',
});

const newsApi = axios.create({
  baseURL: 'https://min-api.cryptocompare.com/data/v2/',
});

export const getCoins = () => api.get('coins');

export const getCoin = (id: string) => api.get(`coins/${id}`);

export const getPrice = (id: string) => api.get(`tickers/${id}`);

export const getCoinOHLC = (id: string, period?: string) => {
  const end = Math.floor(Date.now() / 1000);
  const start = end - 60 * 60 * 24 * convertPeriod(period);
  return api.get(`/coins/${id}/ohlcv/historical?start=${start}&end=${end}`);
};

export const getCoinTweet = (id: string) => api.get(`coins/${id}/twitter`);

export const getMarketsByCoin = (id: string) =>
  api.get(`coins/${id}/markets?quotes=USD,BTC`);

export const search = (query: string) =>
  api.get(`search?c=currencies,exchanges&q=${query}`);

export const getExchanges = () => api.get('exchanges');

export const getExchange = (id: string) => api.get(`exchanges/${id}`);

export const getMarketListOnExchange = (id: string) =>
  api.get(`exchanges/${id}/markets`);

export const getNewsPosts = () => newsApi.get('news/?lang=EN');
