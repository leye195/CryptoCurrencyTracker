import styled from 'styled-components';
import Common from 'components/common';

export const CoinsList = styled.ul`
  padding: 0;
`;

export const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 1rem;
  border-radius: 1rem;
  & > a {
    display: flex;
    align-items: center;
    padding: 1.25rem;
    transition: color 0.2s ease-in;

    & > img {
      height: 1.5rem;
      width: 1.5rem;
      margin-right: 1rem;
    }
  }

  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

export const NewsContainer = styled.div`
  max-width: inherit;
`;

export const NewsList = styled(Common.Row)`
  padding-bottom: 1.5rem;
  margin-bottom: 1rem;
  overflow: auto hidden;
  white-space: nowrap;
`;

export const NewsCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex-wrap: wrap;
  width: 90%;
  height: 10rem;
  padding: 1rem;
  margin-right: 1rem;
  background-color: white;
  border-radius: 1rem;
  color: black;

  & img {
    position: relative;
    top: -1rem;
    height: 1.5rem;
    border: 1px solid #e3e3e3;
    border-radius: 50%;
    margin-right: 1rem;
  }

  & .news__title {
    white-space: pre-wrap;
    width: max-content;
    height: 2.5rem;
    max-width: 100%;
    margin: 0;
  }

  & .news__source {
    font-weight: bold;
  }

  & .news__categories {
    margin: 0.7rem 0 0 0;
    font-size: 0.85rem;
  }
`;
