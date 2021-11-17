import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
`;

const Header = () => {
  return (
    <Container>
      <Link to="/">CryptoCapTracker</Link>
    </Container>
  );
};

export default Header;
