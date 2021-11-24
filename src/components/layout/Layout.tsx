import React, { useState } from 'react';
import SearchContainer from 'container/SearchContainer';
import Common from 'components/common';

const Layout: React.FC = ({ children }) => {
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
      </div>
    </>
  );
};

export default Layout;
