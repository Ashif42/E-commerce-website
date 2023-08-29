import React, { useState } from 'react';
import { GiMagnifyingGlass} from "react-icons/gi";

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="search-bar">
      <input
        className='Searchbarinput'
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}><GiMagnifyingGlass size="19px" color="blue"/><b> SEARCH</b></button>
    </div>
  );
}

export default SearchBar;
