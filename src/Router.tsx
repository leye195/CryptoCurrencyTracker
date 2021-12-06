import { Routes, Route } from 'react-router';

import Layout from 'components/layout/Layout';

import Home from 'pages/home';
import Detail from 'pages/coin';
import Price from 'pages/coin/price';
import Chart from 'pages/coin/chart';
import Market from 'pages/coin/market';
import Tweets from 'pages/tweets';
import Exchange from 'pages/exchange';
import News from 'pages/news';
import Favorites from 'pages/favorites';

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
