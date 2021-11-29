import CoinTable from 'components/CoinTable';
import Common from 'components/common';
import ExchangeImg from 'components/ExchangeImg';
import CoinStat from 'components/CoinStat';
import { DescriptionWrapper, StatWrapper } from 'pages/coin/style';
import { ExchangeInfoType, MarketType } from 'types/exchange';
import { numberFormat } from 'utils';
import {
  ExchangeImgWrapper,
  VolumeWrapper,
  TitleWrapper,
  MarketsWrapper,
} from './style';

type Props = {
  isLoading: boolean;
  isFetched: boolean;
  exchangeInfo?: ExchangeInfoType;
  exchangeMarkets?: MarketType[];
};

const ExchangePresentation = ({
  isLoading = true,
  isFetched = false,
  exchangeInfo,
  exchangeMarkets,
}: Props) => {
  return (
    <Common.Container>
      <Common.SEO
        title={`CryptoCapTracker | ${exchangeInfo?.name}`}
        description={exchangeInfo?.description}
      />
      {isLoading && <Common.Loading />}
      {isFetched && (
        <Common.Col>
          <Common.Row full justifyContent="center">
            <TitleWrapper>
              <ExchangeImgWrapper>
                <ExchangeImg symbol={exchangeInfo?.id as string} />
              </ExchangeImgWrapper>
              <p>{exchangeInfo?.name}</p>
            </TitleWrapper>
          </Common.Row>
          <VolumeWrapper>
            <h5>Volume (24h)</h5>
            <span>
              {numberFormat(
                exchangeInfo?.quotes.USD.reported_volume_24h as number,
                false,
              )}
            </span>
          </VolumeWrapper>
          {exchangeInfo?.description && (
            <DescriptionWrapper>
              <h3>Description</h3>
              <p>{exchangeInfo.description}</p>
            </DescriptionWrapper>
          )}
          {exchangeInfo?.links && (
            <StatWrapper>
              {exchangeInfo?.links?.website && (
                <CoinStat
                  statName="Website"
                  statValue={exchangeInfo?.links.website[0]}
                  type="link"
                  to={exchangeInfo?.links.website[0]}
                />
              )}
              {exchangeInfo?.links?.twitter && (
                <CoinStat
                  statName="Twitter"
                  statValue={exchangeInfo?.links.twitter[0]}
                  type="link"
                  to={exchangeInfo?.links.twitter[0]}
                />
              )}
            </StatWrapper>
          )}
          {exchangeMarkets && exchangeMarkets.length > 0 && (
            <MarketsWrapper>
              <Common.Col className="table__container">
                <CoinTable coins={exchangeMarkets} />
              </Common.Col>
            </MarketsWrapper>
          )}
        </Common.Col>
      )}
    </Common.Container>
  );
};

export default ExchangePresentation;
