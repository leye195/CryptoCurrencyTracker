import styled from 'styled-components';
import Common from 'components/common';
import { CoinTweetType } from 'types/coin';

type Props = {
  tweet: CoinTweetType;
};

const Container = styled(Common.Col)`
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  width: 100%;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.blueYonder};
  color: ${(props) => props.theme.cardTextColor};

  & .tweet__img {
    display: flex;
    align-items: center;

    &__link {
      display: flex;
      justify-content: center;

      & span {
        display: flex;
        align-items: center;
      }
    }

    & img {
      margin-right: 0.5rem;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
    }
  }

  & .tweet__content {
    white-space: pre-wrap;
  }
`;

const Tweet = ({ tweet }: Props) => {
  return (
    <Container className="tweet">
      <Common.Row className="tweet__img">
        <a className="tweet__img__link" href={tweet.status_link}>
          <Common.Img src={tweet.user_image_link} alt={tweet.user_name} />
          <span>{tweet.user_name}</span>
        </a>
      </Common.Row>
      <Common.Row className="tweet__content">
        <p>{tweet.status}</p>
      </Common.Row>
    </Container>
  );
};

export default Tweet;
