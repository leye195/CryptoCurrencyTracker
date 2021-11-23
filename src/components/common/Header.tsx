import { Link } from 'react-router-dom';
import { MdArrowBack, MdSearch } from 'react-icons/md';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router';
import Common from 'components/common';

type Props = {
  title?: string;
};

const Container = styled.header`
  display: flex;
  align-items: center;
  height: 5rem;
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

  & > a {
    display: flex;
    align-items: center;
  }

  & .back-button {
    margin-right: 1rem;
    color: white;
  }

  & .search-button {
    color: white;

    font-size: 1.5rem;
  }
`;

const Header = ({ title = 'CryptoCapTracker' }: Props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Common.Row full justifyContent="space-between" alignItems="center">
        <div>
          {pathname !== '/' && (
            <Common.Button
              className="back-button"
              type="button"
              onClick={handleBack}
            >
              <MdArrowBack />
            </Common.Button>
          )}
          <Link to="/">{title}</Link>
        </div>
        <Common.Button
          className="search-button"
          type="button"
          onClick={() => {}}
        >
          <MdSearch />
        </Common.Button>
      </Common.Row>
    </Container>
  );
};

export default Header;
