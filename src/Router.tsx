import { Routes, Route } from 'react-router';
import loadable from '@loadable/component';
import Layout from 'components/layout/Layout';

const Home = loadable(
  () => import(/* webpackChunkName: "Home" */ 'pages/home'),
);
const Detail = loadable(
  () => import(/* webpackChunkName: "Detail" */ 'pages/coin'),
);
const Price = loadable(
  () => import(/* webpackChunkName: "Price" */ 'pages/coin/price'),
);
const Chart = loadable(
  () => import(/* webpackChunkName: "Chart" */ 'pages/coin/chart'),
);
const Market = loadable(
  () => import(/* webpackChunkName: "Market" */ 'pages/coin/market'),
);
const Tweets = loadable(
  () => import(/* webpackChunkName: "Tweets" */ 'pages/tweets'),
);
const Exchange = loadable(
  () => import(/* webpackChunkName: "Exchange" */ 'pages/exchange'),
);
const News = loadable(
  () => import(/* webpackChunkName: "News" */ 'pages/news'),
);
const Favorites = loadable(
  () => import(/* webpackChunkName: "Favorites" */ 'pages/favorites'),
);

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/:coinId" element={<Detail />}>
          <Route path="/:coinId/price" element={<Price />} />
          <Route path="/:coinId/chart" element={<Chart />} />
          <Route path="/:coinId/markets" element={<Market />} />
        </Route>
        <Route path="/:coinId/tweets" element={<Tweets />} />
        <Route path="/exchange/:exchangeId" element={<Exchange />} />
        <Route path="/news" element={<News />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There&apos;s nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Layout>
  );
};

export default Router;
