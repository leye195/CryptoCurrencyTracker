import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { MdArrowRight } from 'react-icons/md';
import CoinImg from 'components/CoinImg';
import Tag from 'components/common/Tag';
import CoinStat from 'components/CoinStat';
import Tab from 'components/common/Tab';
import Common from 'components/common';
import Loading from 'components/common/Loading';
import { CoinInfoType, CoinPriceType, CoinTweetType } from 'types/coin';
import { numberFormat } from 'utils';
import {
  CoinTitleWrapper,
  TagsWrapper,
  PriceWrapper,
  DescriptionWrapper,
  LinkWrapper,
  StatWrapper,
  ChartWrapper,
  TweetWrapper,
} from './style';

type Props = {
  name: string;
  isLoading: boolean;
  isFetched: boolean;
  coinInfo?: CoinInfoType;
  coinPrice?: CoinPriceType;
  tweets?: CoinTweetType[];
};

export default function DetailPresentation({
  name = '',
  isLoading = true,
  isFetched = false,
  coinInfo,
  coinPrice,
  tweets,
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
          <TweetWrapper>
            <Common.Row alignItems="center" justifyContent="space-between">
              <h3>Tweets</h3>
              <Link to="./tweets">
                more <MdArrowRight />
              </Link>
            </Common.Row>
            {tweets?.slice(0, 3)?.map((tweet) => (
              <Common.Col className="tweet" key={tweet.status_id}>
                <Common.Row className="tweet__img">
                  <a href={tweet.status_link}>
                    <Common.Img
                      src={tweet.user_image_link}
                      alt={tweet.user_name}
                    />
                    <span>{tweet.user_name}</span>
                  </a>
                </Common.Row>
                <Common.Row className="tweet__content">
                  <p>{tweet.status}</p>
                </Common.Row>
              </Common.Col>
            ))}
          </TweetWrapper>
        </Common.Col>
      )}
    </Common.Container>
  );
}
