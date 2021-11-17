import Img from './common/Img';

type Props = {
  symbol: string;
};

const CoinImg = ({ symbol }: Props) => {
  return (
    <Img
      src={`https://cryptoicon-api.vercel.app/api/icon/${symbol.toLowerCase()}`}
      alt={symbol}
    />
  );
};

export default CoinImg;
