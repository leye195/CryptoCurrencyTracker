import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MarketType } from 'types/exchange';
import { numberFormat } from 'utils';
import Common from 'components/common';
import CoinImg from './CoinImg';

type Props = {
  coins: MarketType[];
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
  padding: 0.8rem 0.4rem;
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

  & p {
    margin: 0 0 0 0.5rem;
    line-height: 1.5rem;
    white-space: pre;
  }

  & img {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

const TableRow = styled.tr``;

const CoinTable = ({ coins }: Props) => {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeadItem>Currency</TableHeadItem>
          <TableHeadItem>Pair</TableHeadItem>
          <TableHeadItem>Price</TableHeadItem>
          <TableHeadItem>Volume 24H</TableHeadItem>
        </TableRow>
      </thead>
      <tbody>
        {coins?.map((coin, idx) => (
          <TableRow key={coin.pair}>
            <TableRowItem isLastRow={idx + 1 === coins.length}>
              <Link to={`/${coin.base_currency_id}`}>
                <Common.Row alignItems="center">
                  <CoinImg symbol={coin.base_currency_id.split('-')[0]} />
                  <Common.Row alignItems="center">
                    <p>{coin.base_currency_name}</p>
                  </Common.Row>
                </Common.Row>
              </Link>
            </TableRowItem>
            <TableRowItem isLastRow={idx + 1 === coins.length}>
              <a href={coin.market_url}>{coin.pair}</a>
            </TableRowItem>
            <TableRowItem isLastRow={idx + 1 === coins.length}>
              {numberFormat(coin.quotes.USD.price as number, true)}
            </TableRowItem>
            <TableRowItem isLastRow={idx + 1 === coins.length}>
              {numberFormat(coin.quotes.USD.volume_24h as number, false)}
            </TableRowItem>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default CoinTable;
