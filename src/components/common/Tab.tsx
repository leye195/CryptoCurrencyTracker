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
          backgroundColor: isActive ? '#ffffff' : 'rgba(255,255,255,0.15)',
          color: isActive ? '#000000' : '',
          borderRadius: '0.5rem',
        };
      }}
    >
      {children}
    </NavLink>
  );
};

export default Tab;
