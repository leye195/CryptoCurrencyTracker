import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import styled from 'styled-components';
import { useLocation } from 'react-router';

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
  & > a {
    display: flex;
    align-items: center;
  }

  & .back-button {
    margin-right: 1rem;
  }
`;

const Header = () => {
  const { pathname } = useLocation();
  return (
    <Container>
      <Link to="/">
        {pathname !== '/' && <MdArrowBack className="back-button" />}
        CryptoCapTracker
      </Link>
    </Container>
  );
};

export default Header;
