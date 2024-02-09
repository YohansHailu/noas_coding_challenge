import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import { useRef } from 'react';

type Props = {
  searchHandler: any;
}

const SearchBar: React.FC<Props> = ({ searchHandler }) => {

  const inputRef = useRef<HTMLInputElement>(null);
  function handleKeyDown(event: any) {
    if (event.key === 'Enter') {
      searchHandler(searchInput);
      inputRef.current?.blur();
    }
  }

  const [searchInput, setSearchInput] = useState('');

  return (
    <div className="search-bar">
      <input
        ref={inputRef}
        value={searchInput}
        type="search"
        name="search"
        pattern=".*\S.*"
        required
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="search-btn" onClick={() => searchHandler(searchInput)}>
        <span>Search</span>
      </button>
    </div>
  );
};

export default SearchBar;
