import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { getCoinTweet } from 'apis';
import { DetailParams } from 'types/coin';
import TweetsPresentation from './TweetsPresentation';

const TweetsContainer = () => {
  const { coinId }: DetailParams = useParams();

  const {
    data: tweets,
    isLoading: isTweetLoading,
    isFetched: isTweetFetched,
  } = useQuery(['coinTweet', coinId], async () => {
    const res = await getCoinTweet(coinId as string);
    return res.data;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <TweetsPresentation
      tweets={tweets}
      isLoading={isTweetLoading}
      isFetched={isTweetFetched}
    />
  );
};

export default TweetsContainer;
