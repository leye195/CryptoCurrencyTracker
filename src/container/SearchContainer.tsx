import { ChangeEvent, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Common from 'components/common';
import SearchHeader from 'components/search/SearchHeader';
import { search } from 'apis';
import { SearchResultType } from 'types/coin';
import CoinImg from 'components/CoinImg';

type Props = {
  handleSearchOpen: (isOpen: boolean) => () => void;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #2c3e50;
`;

const Wrapper = styled.div`
  padding: 0 0.5rem;
`;

const ItemContainer = styled.ul`
  padding: 0.25rem;
  width: 100%;
`;

const Item = styled.li`
  padding: 0.5rem 0;
  list-style: none;
  cursor: pointer;

  & img {
    height: 1.5rem;
    width: 1.5rem;
  }

  & .coin-name {
    margin-left: 1rem;
  }
`;

const SearchContainer = ({ handleSearchOpen }: Props) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { data, isFetched } = useQuery<SearchResultType>(
    ['search', query],
    async () => {
      const res = await search(query);
      return res.data;
    },
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClear = () => {
    setQuery('');
  };

  const handleLink = (id: string) => () => {
    navigate(`/${id}/price`);
    handleSearchOpen(false)();
  };

  return (
    <Container>
      <SearchHeader
        query={query}
        handleSearchOpen={handleSearchOpen}
        handleChange={handleChange}
        handleClear={handleClear}
      />
      <Wrapper>
        {isFetched && (
          <Common.Col>
            {data?.currencies && data.currencies.length > 0 && (
              <p>Currencies</p>
            )}
            <ItemContainer>
              {data?.currencies &&
                data.currencies.map((currency) => (
                  <Item
                    tabIndex={0}
                    role="button"
                    onKeyDown={() => {}}
                    onClick={handleLink(currency.id)}
                  >
                    <Common.Row full alignItems="center">
                      <CoinImg symbol={currency.symbol.toLocaleLowerCase()} />
                      <div className="coin-name">{currency.name}</div>
                    </Common.Row>
                  </Item>
                ))}
            </ItemContainer>
          </Common.Col>
        )}
      </Wrapper>
    </Container>
  );
};

export default SearchContainer;
