import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import Common from 'components/common';
import Loading from 'components/common/Loading';

import { CoinType } from 'types/coin';
import { NewsType } from 'types/news';
import { Coin, CoinsList, NewsCard, NewsContainer, NewsList } from './style';

type Props = {
  coins?: CoinType[];
  news?: NewsType;
  isLoading: boolean;
  isFetched: boolean;
};

export default function HomePresentation({
  coins,
  news,
  isLoading,
  isFetched,
}: Props) {
  return (
    <Common.Container>
      <Common.SEO />
      <NewsContainer>
        {isFetched && (
          <>
            <h3>News</h3>
            <NewsList full alignItems="center">
              {news?.Data?.slice(0, 5).map((post) => (
                <NewsCard className="news" key={post.id}>
                  <a href={post.url}>
                    <Common.Row full alignItems="center">
                      <p className="news__source">{post.source}</p>
                      <Common.Img src={post.imageurl} alt={post.title} />
                    </Common.Row>
                    <p className="news__title">{post.title}</p>
                    <p className="news__categories">{post.categories}</p>
                  </a>
                </NewsCard>
              ))}
            </NewsList>
          </>
        )}
      </NewsContainer>
      <CoinsList>
        <h3>Coins</h3>
        {isLoading && <Loading />}
        {isFetched &&
          coins?.slice(0, 100)?.map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={`/${coin.id}/price`}
                state={{ name: coin.name, symbol: coin.symbol }}
              >
                <Common.Img
                  src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  alt={coin.symbol?.toLowerCase()}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
      </CoinsList>
    </Common.Container>
  );
}
