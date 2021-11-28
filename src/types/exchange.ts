export type DetailParams = {
  exchangeId?: string;
};

export type FiatType = {
  name: string;
  symbol: string;
};

export type QuoteType = {
  USD: {
    reported_volume_24h?: number;
    adjusted_volume_24h?: number;
    reported_volume_7d?: number;
    adjusted_volume_7d?: number;
    reported_volume_30d?: number;
    adjusted_volume_30d?: number;
    price?: number;
    volume_24h?: number;
  };
};

export type MarketType = {
  pair: string;
  base_currency_id: string;
  base_currency_name: string;
  quote_currency_id: string;
  quote_currency_name: string;
  market_url: string;
  category: string;
  fee_type: string;
  outlier: boolean;
  reported_volume_24h_share: number;
  quotes: QuoteType;
  trust_score: string;
  last_updated: string;
};

export type ExchangeInfoType = {
  id: string;
  name: string;
  description: string;
  active: boolean;
  web_status: boolean;
  api_status: boolean;
  markets_data_fetched: boolean;
  adjusted_rank: number;
  reported_rank: number;
  currencies: number;
  markets: number;
  confidence_score: number;
  fiats: FiatType[];
  quotes: QuoteType;
  last_updated: string;
  links: {
    website: string[];
    twitter: string[];
  };
};
