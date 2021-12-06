import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdFavorite, MdHome } from 'react-icons/md';
import Common from 'components/common';

const Container = styled.div`
  display: flex;
  position: fixed;

  bottom: 0;
  width: 100%;
  background-color: #2c3e50;
  color: ${(props) => props.theme.white};

  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 0.5rem 0;
  }

  & svg {
    font-size: 1.25rem;
  }
`;

const BottomNavigator = () => {
  return (
    <Container>
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            color: isActive ? '#ffffff' : '#ffffffad',
          };
        }}
      >
        <Common.Col alignItems="center">
          <MdHome />
          Home
        </Common.Col>
      </NavLink>
      <NavLink
        to="/favorites"
        style={({ isActive }) => {
          return {
            color: isActive ? '#ffffff' : '#ffffffad',
          };
        }}
      >
        <Common.Col alignItems="center">
          <MdFavorite />
          Favorites
        </Common.Col>
      </NavLink>
    </Container>
  );
};

export default BottomNavigator;
