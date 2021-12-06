import styled from 'styled-components';

type DotType = {
  active?: boolean;
};

type NewsType = {
  position: number;
  currentDot: number;
  currentWidth: number;
};

export const CoinsList = styled.ul`
  padding-bottom: 4rem;
`;

export const Coin = styled.li`
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
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

  & > h3 a {
    display: flex;
    align-items: center;
  }
`;

export const NewsList = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 1;
  margin-bottom: 1rem;
  overflow: auto hidden;
  white-space: nowrap;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NewsCard = styled.div<NewsType>`
  display: flex;
  flex-direction: column;
  position: relative;
  flex-wrap: wrap;
  min-width: -webkit-fill-available;
  width: 100%;
  height: 10rem;
  padding: 0.5rem;
  margin-right: 0.5rem;
  background-color: ${(props) => props.theme.white};
  border-radius: 1rem;
  color: ${(props) => props.theme.black};
  font-size: ${(props) => (props.currentWidth < 400 ? '0.8rem' : '1rem')};
  transform: ${(props) =>
    `translateX(${props.currentDot * -props.currentWidth}px)`};
  transition: transform 1s cubic-bezier(0.5, 0, 0.1, 1);
  scroll-snap-align: center;

  & > a {
    height: inherit;
  }

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
    max-width: 20rem;
    height: 1.5rem;
    max-width: 100%;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & .news__source {
    font-weight: bold;
    color: ${(props) => props.theme.blue};
  }

  & .news__tags {
    margin: 0.7rem 0 0 0;
    font-size: 0.85rem;
  }
`;

export const Dot = styled.div<DotType>`
  width: 0.8rem;
  height: 0.8rem;
  margin: 0 0.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.white};
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
