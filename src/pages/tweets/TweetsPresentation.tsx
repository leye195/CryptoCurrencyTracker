import Common from 'components/common';
import ToTopButton from 'components/ToTopButton';
import Tweet from 'components/Tweet';

import { CoinTweetType } from 'types/coin';

type Props = {
  isLoading: boolean;
  isFetched: boolean;
  tweets?: CoinTweetType[];
};

const TweetsPresentation = ({ isLoading, isFetched, tweets }: Props) => {
  return (
    <Common.Container>
      <Common.SEO title="CryptoCapTracker | Tweets" />
      {isLoading && <Common.Loading />}
      {isFetched && (
        <Common.Col>
          {tweets?.map((tweet) => (
            <Tweet key={tweet.status_id} tweet={tweet} />
          ))}
        </Common.Col>
      )}
      <ToTopButton />
    </Common.Container>
  );
};

export default TweetsPresentation;
