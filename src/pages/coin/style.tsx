import styled from 'styled-components';
import Skeleton from 'components/common/Skeleton';

export const TitleSkeleton = styled(Skeleton)`
  height: 52px;
  margin: 1rem 0 1.5rem 0;
`;

export const TagSkeleton = styled(Skeleton)`
  height: 2rem;
  margin-bottom: 2rem;
`;

export const SubTitleSkeleton = styled(Skeleton)`
  height: 1.5rem;
  width: 10rem;
  margin-bottom: 12.5px;
`;

export const PriceSkeleton = styled(Skeleton)`
  height: 38px;
  margin-bottom: 1rem;
`;

export const DescriptionSkeleton = styled(Skeleton)`
  height: 5rem;
  margin-bottom: 1rem;
`;

export const StatSkeleton = styled(Skeleton)`
  height: 56px;
  margin-bottom: 0.5rem;
`;

export const TitleWrapper = styled.div`
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

export const TagsWrapper = styled.div`
  margin: 1.5rem auto;
  & p {
    white-space: pre;
  }
`;

export const PriceWrapper = styled.div`
  width: 100%;
  margin-top: 0.5rem;

  & h5 {
    font-size: 1rem;
    margin-bottom: 0.8rem;
    color: ${(props) => props.theme.textColor};
  }

  & span {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const StatWrapper = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`;

export const DescriptionWrapper = styled.div`
  width: 100%;

  & > p {
    padding: 0.5rem;
    border-radius: 0.5rem;
    white-space: pre-line;
    color: ${(props) => props.theme.cardTextColor};
    background: ${(props) => props.theme.blueYonder};
  }
`;

export const LinkWrapper = styled.div`
  margin: 1rem 0;
  width: 100%;
  & a {
    padding: 0.5rem 1rem;
    flex: 1;
    text-align: center;
    font-weight: bold;
  }
`;

export const ChartWrapper = styled.div`
  padding-bottom: 1rem;
  width: 100%;
`;

export const TweetWrapper = styled(ChartWrapper)`
  padding-bottom: 2rem;
  width: 100%;

  & .more {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
