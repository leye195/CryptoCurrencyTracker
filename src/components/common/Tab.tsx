import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
};

const Tab: React.FC<Props> = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => {
        return {
          backgroundColor: isActive ? 'white' : '',
          color: isActive ? 'black' : '',
          borderRadius: isActive ? '0.5rem' : '0',
        };
      }}
    >
      {children}
    </NavLink>
  );
};

export default Tab;
