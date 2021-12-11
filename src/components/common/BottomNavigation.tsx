import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdFavorite, MdHome } from 'react-icons/md';
import Common from 'components/common';

const Container = styled.div`
  display: flex;
  position: fixed;

  bottom: 0;
  width: 100%;
  height: 4rem;
  background-color: #2c3e50;
  color: ${(props) => props.theme.white};
  border-top: 0.5px solid white;

  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 0.5rem 0;

    & .text {
      position: absolute;
      bottom: 0.2rem;
      opacity: 0;
      font-size: 0.85rem;
    }

    &.active .indicator {
      border-radius: 50%;
      background-color: ${(props) => props.theme.blue};
      transform: translateY(-25px);
    }

    &.active .text {
      opacity: 1;
    }
  }

  & .indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    width: 3rem;
    transition: 0.5s;
  }

  & svg {
    font-size: 1.5rem;
  }
`;

const BottomNavigation = () => {
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
          <span className="indicator">
            <MdHome />
          </span>
          <span className="text">Home</span>
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
          <span className="indicator">
            <MdFavorite />
          </span>
          <span className="text">Favorites</span>
        </Common.Col>
      </NavLink>
    </Container>
  );
};

export default BottomNavigation;
