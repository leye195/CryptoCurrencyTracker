import { Link } from 'react-router-dom';
import { MdArrowBack, MdSearch } from 'react-icons/md';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router';
import Toggle from 'react-toggle';
import { useRecoilState } from 'recoil';
import { isDarkState } from 'recoil/atoms';
import Common from 'components/common';

import 'react-toggle/style.css';

type Props = {
  title?: string;
  handleSearchOpen: (isOpen: boolean) => () => void;
};

const Container = styled.header`
  display: flex;
  align-items: center;
  height: 4rem;
  width: 100%;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #24313e;
  font-size: 1.25rem;
  font-weight: bold;
  border-bottom: 0.5px solid white;
  z-index: 100;

  & a {
    display: flex;
    align-items: center;
    color: white !important;
  }

  & .back-button {
    margin-right: 1rem;
    color: white;
  }

  & .react-toggle-track-check,
  & .react-toggle-track-x {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
  }

  & .search-button {
    margin-left: 0.5rem;
    color: white;
    font-size: 1.5rem;
  }
`;

const Header = ({ title = 'CryptoCapTracker', handleSearchOpen }: Props) => {
  const [isDark, setIsDark] = useRecoilState(isDarkState);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleToggle = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <Container>
      <Common.Row full justifyContent="space-between" alignItems="center">
        <Common.Row alignItems="center">
          {pathname !== '/' && pathname !== '/favorites' && (
            <Common.Button
              className="back-button"
              type="button"
              onClick={handleBack}
            >
              <MdArrowBack />
            </Common.Button>
          )}
          <Link to="/">{title}</Link>
        </Common.Row>

        <Common.Row>
          <Toggle
            className="mode-toggle"
            checked={isDark}
            onChange={handleToggle}
            icons={{
              checked: '🌙',
              unchecked: '🌞',
            }}
          />
          <Common.Button
            className="search-button"
            type="button"
            onClick={handleSearchOpen(true)}
          >
            <MdSearch />
          </Common.Button>
        </Common.Row>
      </Common.Row>
    </Container>
  );
};

export default Header;
