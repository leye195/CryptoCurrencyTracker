import styled from 'styled-components';

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
