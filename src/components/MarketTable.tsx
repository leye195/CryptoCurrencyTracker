import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CoinMarketType } from 'types/coin';
import { numberFormat } from 'utils';

type Props = {
  markets: CoinMarketType[];
};

const Table = styled.table`
  width: 100%;
  background: transparent;
  border-radius: 0.25rem;
`;

const TableHeadItem = styled.th`
  padding: 0.8rem 0.8rem;
  border-bottom: 1px solid #aab1c56b;
  text-align: start;

  &:first-child {
    position: sticky;
    background: #2c3e50;
    left: 0;
  }
`;

const TableRowItem = styled.td<{ isLastRow: boolean }>`
  padding: 0.8rem 0.8rem;
  border-bottom: ${(props) =>
    props.isLastRow ? 'none' : '1px solid #aab1c56b'};

  &:first-child {
    position: sticky;
    background: #2c3e50;
    left: 0;
  }

  & > a {
    color: #8cc4ff;
  }
`;

const TableRow = styled.tr``;

const MarketTable = ({ markets }: Props) => {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeadItem>Exchange</TableHeadItem>
          <TableHeadItem>Pair</TableHeadItem>
          <TableHeadItem>Price</TableHeadItem>
          <TableHeadItem>Volume 24H</TableHeadItem>
        </TableRow>
      </thead>
      <tbody>
        {markets?.slice(0, 20)?.map((market, idx) => (
          <TableRow key={`${market.exchange_id}-${market.pair}`}>
            <TableRowItem isLastRow={idx === 19}>
              <Link to={`/exchange/${market.exchange_id}`}>
                {market.exchange_name}
              </Link>
            </TableRowItem>
            <TableRowItem isLastRow={idx === 19}>
              <a href={market.market_url}>{market.pair}</a>
            </TableRowItem>
            <TableRowItem isLastRow={idx === 19}>
              {numberFormat(market.quotes.USD.price, true)}
            </TableRowItem>
            <TableRowItem isLastRow={idx === 19}>
              {numberFormat(market.quotes.USD.volume_24h, false)}
            </TableRowItem>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default MarketTable;
