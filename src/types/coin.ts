export type DetailParams = {
  coinId?: string;
};

export type CoinType = {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
};

export type ContractsType = {
  contract: string;
  platform: string;
  type: string;
};

export type ParentType = {
  id: string;
  name: string;
  symbol: string;
};

export type TagType = {
  coin_counter: number;
  ico_counter: number;
  id: string;
  name: string;
};

export type LinksType = {
  explorer?: string[];
  facebook?: string[];
  reddit?: string[];
  website?: string[];
  youtube?: string[];
  source_code?: string[];
};

export type TeamType = {
  id: string;
  name: string;
  position: string;
};

export type LinkExtendedType = {
  type: string;
  url: string;
};

export type WhitePaperType = {
  link: string;
  thumbnail: string;
};

export type CoinInfoType = {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  contract: string;
  platform: string;
  contracts: ContractsType[];
  parent: ParentType;
  tags: TagType[];
  team: TeamType[];
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  links: LinksType;
  links_extended: LinkExtendedType[];
  whitepaper: WhitePaperType;
  first_data_at: string;
  last_data_at: string;
};

export type CoinPriceType = {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      ath_date: number;
      percent_from_price_ath: number;
    };
  };
};

export type CoinOHLCType = {
  time_open: string;
  time_close: string;
  close: number;
  open: number;
  market_cap: number;
  high: number;
  low: number;
  volume: number;
};

export type CoinTweetType = {
  date: string;
  is_retweet: boolean;
  like_count: number;
  retweet_count: number;
  status: string;
  status_id: string;
  status_link: string;
  user_image_link: string;
  user_name: string;
};
