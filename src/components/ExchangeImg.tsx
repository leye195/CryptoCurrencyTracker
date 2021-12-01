import Img from './common/Img';

type Props = {
  symbol: string;
};

const ExchangeImg = ({ symbol }: Props) => {
  return (
    <Img
      src={`https://static.coinpaprika.com/exchanges/${symbol?.toLowerCase()}/logo-thumb.png`}
      alt={symbol}
    />
  );
};

export default ExchangeImg;
