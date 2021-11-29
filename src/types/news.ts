export type NewsData = {
  id: string;
  title: string;
  body: string;
  imageurl: string;
  published_on: number;
  url: string;
  source: string;
  categories: string;
};

export type NewsType = {
  Data: NewsData[];
};
