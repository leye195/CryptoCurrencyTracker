import { Routes, Route } from 'react-router';
import Home from 'pages/home';
import Detail from 'pages/detail';
import Price from 'pages/detail/price';
import Chart from 'pages/detail/chart';
import Market from 'pages/detail/market';
import Tweets from 'pages/tweets';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:coinId" element={<Detail />}>
        <Route path="/:coinId/price" element={<Price />} />
        <Route path="/:coinId/chart" element={<Chart />} />
        <Route path="/:coinId/markets" element={<Market />} />
      </Route>
      <Route path="/:coinId/tweets" element={<Tweets />} />
      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>There&apos;s nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};

export default Router;
