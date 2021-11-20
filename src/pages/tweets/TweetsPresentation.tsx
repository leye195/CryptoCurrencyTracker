import Common from 'components/common';
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
      <Common.Header />
      {isLoading && <Common.Loading />}
      {isFetched && (
        <Common.Col>
          {tweets?.map((tweet) => (
            <Tweet key={tweet.status_id} tweet={tweet} />
          ))}
        </Common.Col>
      )}
    </Common.Container>
  );
};

export default TweetsPresentation;
