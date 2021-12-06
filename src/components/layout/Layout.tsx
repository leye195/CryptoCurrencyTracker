import React, { useState } from 'react';
import SearchContainer from 'container/SearchContainer';
import Common from 'components/common';
import ToTopButton from 'components/ToTopButton';
import { useLocation } from 'react-router';

const Layout: React.FC = ({ children }) => {
  const { pathname } = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchOpen = (isOpen: boolean) => () => {
    setIsSearchOpen(isOpen);
  };

  return (
    <>
      {isSearchOpen && <SearchContainer handleSearchOpen={handleSearchOpen} />}
      <div>
        <Common.Header handleSearchOpen={handleSearchOpen} />
        {children}
        {(pathname === '/' || pathname === '/favorites') && (
          <Common.BottomNavigator />
        )}
      </div>
      <ToTopButton />
    </>
  );
};

export default Layout;
