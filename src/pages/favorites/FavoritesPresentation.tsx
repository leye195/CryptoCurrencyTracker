import { Link } from 'react-router-dom';
import { MdStarBorder, MdStar } from 'react-icons/md';

import Common from 'components/common';

import { CoinType } from 'types/coin';
import { checkIsFavorite } from 'utils';
import { CoinsList, Coin } from 'pages/home/style';

type Props = {
  coins: CoinType[];
  handleFavorite: (coin: CoinType) => () => void;
};

const FavoritesPresentation = ({ coins, handleFavorite }: Props) => {
  return (
    <Common.Container>
      <CoinsList>
        {coins?.slice(0, 100)?.map((coin) => (
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
            <Common.Button
              className="favorite"
              type="button"
              onClick={handleFavorite(coin)}
            >
              {checkIsFavorite(coin.id) ? <MdStar /> : <MdStarBorder />}
            </Common.Button>
          </Coin>
        ))}
      </CoinsList>
    </Common.Container>
  );
};

export default FavoritesPresentation;
