import React, { ChangeEvent } from 'react';
import { MdSearch, MdOutlineClear } from 'react-icons/md';
import styled from 'styled-components';
import Common from 'components/common';

type Props = {
  query: string;
  handleSearchOpen: (isOpen: boolean) => () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClear: () => void;
};

const Container = styled.header`
  display: flex;
  align-items: center;
  height: 4rem;
  width: 100%;
  padding: 1rem 1rem;
  top: 0;
  left: 0;
  background-color: #24313e;
  font-size: 1.25rem;
  font-weight: bold;
  border-bottom: 0.5px solid white;
  z-index: 100;

  & .search-icon {
    margin-right: 0.25rem;
  }

  & .search-input {
    flex: 1;
    padding: 0 0.25rem;
    font-size: 1rem;

    & > input {
      background-color: transparent;
      border: none;
      color: white;
      caret-color: white;

      &:focus {
        outline: none;
      }
    }
  }

  & .search-clear {
    display: flex;
    align-items: center;
    color: white;
  }

  & .search-cancel {
    padding: 0.25rem;
    margin-left: 0.5rem;
    background-color: white;
    color: black;
    border-radius: 0.5rem;
    font-size: 0.9rem;
  }
`;

const SearchHeader = ({
  query,
  handleSearchOpen,
  handleChange,
  handleClear,
}: Props) => {
  return (
    <Container>
      <Common.Row alignItems="center" full>
        <MdSearch className="search-icon" />
        <Common.Row className="search-input">
          <input
            className="search-input"
            placeholder="What are you looking for?"
            onChange={handleChange}
            value={query}
          />
        </Common.Row>
        <Common.Row alignItems="center">
          <Common.Button
            className="search-clear"
            type="button"
            onClick={handleClear}
          >
            <MdOutlineClear />
          </Common.Button>
          <Common.Button
            className="search-cancel"
            type="button"
            onClick={handleSearchOpen(false)}
          >
            Cancel
          </Common.Button>
        </Common.Row>
      </Common.Row>
    </Container>
  );
};

export default SearchHeader;
