import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';

type Props = {
  searchHandler: any;
}

const SearchBar: React.FC<Props> = ({ searchHandler }) => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className="search-bar">
      <input
        value={searchInput}
        type="search"
        name="search"
        pattern=".*\S.*"
        required
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className="search-btn" onClick={() => searchHandler(searchInput)}>
        <span>Search</span>
      </button>
    </div>
  );
};

export default SearchBar;
