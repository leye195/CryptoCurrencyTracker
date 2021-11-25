import { Link } from 'react-router-dom';
import Common from 'components/common';
import Loading from 'components/common/Loading';

import { CoinType } from 'types/coin';
import { Coin, CoinsList } from './style';

type Props = {
  coins?: CoinType[];
  isLoading: boolean;
  isFetched: boolean;
};

export default function HomePresentation({
  coins,
  isLoading,
  isFetched,
}: Props) {
  return (
    <Common.Container>
      <Common.SEO />
      <CoinsList>
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
