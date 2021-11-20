import styled from 'styled-components';
import { Outlet } from 'react-router';
import CoinImg from 'components/CoinImg';
import Tag from 'components/common/Tag';
import CoinStat from 'components/CoinStat';
import Tab from 'components/common/Tab';
import Common from 'components/common';
import Loading from 'components/common/Loading';
import { CoinInfoType, CoinPriceType } from 'types/coin';
import { numberFormat } from 'utils';

type Props = {
  name: string;
  isLoading: boolean;
  isFetched: boolean;
  coinInfo?: CoinInfoType;
  coinPrice?: CoinPriceType;
};

const CoinTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  & > img {
    margin-right: 0.5rem;
    height: 1.8rem;
    width: 1.8rem;
  }

  & > p {
    margin: 0;
    font-size: 1.5rem;
  }
`;

const TagsWrapper = styled.div`
  margin: 1.5rem auto;
  & p {
    white-space: pre;
  }
`;

const PriceWrapper = styled.div`
  margin-top: 0.5rem;

  & h5 {
    font-size: 1rem;
    margin-bottom: 0.8rem;
    color: #f3f0f0;
  }

  & span {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const StatWrapper = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`;

const DescriptionWrapper = styled.div`
  & > p {
    line-height: 1.25em;
    background: #557595;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
`;

const LinkWrapper = styled.div`
  margin: 1rem 0;
  width: 100%;
  & a {
    padding: 0.5rem 1rem;
    flex: 1;
    text-align: center;
    font-weight: bold;
  }
`;

const ChartWrapper = styled.div`
  padding-bottom: 1rem;
  width: 100%;
`;

export default function DetailPresentation({
  name = '',
  isLoading = true,
  isFetched = false,
  coinInfo,
  coinPrice,
}: Props) {
  return (
    <Common.Container>
      <Common.Header />
      {isLoading && <Loading />}
      {isFetched && (
        <Common.Col>
          <Common.Row full justifyContent="center">
            <CoinTitleWrapper>
              <CoinImg symbol={coinInfo?.symbol as string} />
              <p>{name || coinInfo?.name}</p>
              <Tag>
                <p>{coinInfo?.symbol}</p>
              </Tag>
            </CoinTitleWrapper>
          </Common.Row>
          <TagsWrapper>
            <Common.Row justifyContent="center">
              <Tag>
                <p>Rank #{coinInfo?.rank}</p>
              </Tag>
              <Tag>
                <p>{coinInfo?.type}</p>
              </Tag>
              <Tag>
                <p>OpenSource: {coinInfo?.open_source ? 'Yes' : 'No'}</p>
              </Tag>
            </Common.Row>
          </TagsWrapper>
          <PriceWrapper>
            <h5>{coinInfo?.name} Price</h5>
            <span>${coinPrice?.quotes.USD.price.toFixed(2)}</span>
          </PriceWrapper>
          <DescriptionWrapper>
            <h3>Description</h3>
            <p>{coinInfo?.description}</p>
          </DescriptionWrapper>
          <StatWrapper>
            <CoinStat
              statName="Market Cap"
              statValue={coinPrice?.quotes.USD.market_cap}
              statPercent={coinPrice?.quotes.USD.market_cap_change_24h}
              isPrice
            />
            <CoinStat
              statName="Volume 24H"
              statValue={coinPrice?.quotes.USD.volume_24h}
              statPercent={coinPrice?.quotes.USD.volume_24h_change_24h}
              isPrice
            />
            <CoinStat
              statName="Volume / Market Cap"
              statValue={(
                (coinPrice?.quotes.USD.volume_24h as number) /
                (coinPrice?.quotes.USD.market_cap as number)
              ).toFixed(4)}
            />
            <CoinStat
              statName="Max Supply"
              statValue={
                numberFormat(coinPrice?.max_supply as number, false) || '--'
              }
            />
            <CoinStat
              statName="Total Supply"
              statValue={numberFormat(coinPrice?.total_supply as number, false)}
            />
            <CoinStat
              statName="Links"
              statValue={`${Object.keys(coinInfo?.links || {})
                .slice(0, 2)
                .join()},etc >`}
            />
            <CoinStat
              statName="Tags"
              statValue={`${(coinInfo?.tags.map((tag) => tag?.name) || [])
                .slice(0, 1)
                .join()},etc >`}
            />
          </StatWrapper>
          <LinkWrapper>
            <Common.Row full>
              <Tab to={`/${coinInfo?.id}/price`}>Price</Tab>
              <Tab to={`/${coinInfo?.id}/chart`}>History</Tab>
            </Common.Row>
          </LinkWrapper>
          <ChartWrapper>
            <Outlet />
          </ChartWrapper>
        </Common.Col>
      )}
    </Common.Container>
  );
}
