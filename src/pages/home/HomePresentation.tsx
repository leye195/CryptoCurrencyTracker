import { Link } from 'react-router-dom';
import { MdArrowRight } from 'react-icons/md';
import Common from 'components/common';
import Loading from 'components/common/Loading';
import { capitalize, summarizeTags } from 'utils';

import { CoinType } from 'types/coin';
import { NewsType } from 'types/news';
import {
  Coin,
  CoinsList,
  Dot,
  NewsCard,
  NewsContainer,
  NewsList,
} from './style';

type Props = {
  coins?: CoinType[];
  news?: NewsType;
  isLoading: boolean;
  isFetched: boolean;
  currentDot: number;
  handleDot: (index: number) => () => void;
};

export default function HomePresentation({
  coins,
  news,
  isLoading,
  isFetched,
  currentDot,
  handleDot,
}: Props) {
  return (
    <Common.Container>
      <Common.SEO />
      <NewsContainer>
        {isFetched && (
          <>
            <h3>
              <Link to="/news">
                News <MdArrowRight />
              </Link>
            </h3>
            <NewsList>
              {news?.Data?.slice(0, 5).map((post, idx) => (
                <NewsCard
                  key={post.id}
                  className="news"
                  currentDot={currentDot}
                  position={idx}
                >
                  <a href={post.url}>
                    <Common.Row full alignItems="center">
                      <p className="news__source">{capitalize(post.source)}</p>
                      <Common.Img src={post.imageurl} alt={post.title} />
                    </Common.Row>
                    <p className="news__title">{post.title}</p>
                    <p className="news__tags">{summarizeTags(post.tags)}</p>
                  </a>
                </NewsCard>
              ))}
            </NewsList>
            <Common.Row full justifyContent="center" alignItems="space-between">
              {news?.Data?.slice(0, 5).map((_, idx) => (
                <Dot
                  key={`dot${idx}`}
                  active={idx === currentDot}
                  onClick={handleDot(idx)}
                />
              ))}
            </Common.Row>
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
