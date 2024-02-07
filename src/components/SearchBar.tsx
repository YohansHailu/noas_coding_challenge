import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, ChangeEvent, FormEvent } from 'react';


type props = {
  searchHandler: (searchInput: string) => void;
}

const SearchBar: React.FC<props> = ({ searchHandler }: props) => {

  let [searchInput, setSearchInput] = useState('');
  return (
    <div className="search-bar">
      <input value={searchInput.substring(0, 1).toUpperCase() + searchInput.substring(1)} type="search" name="search" pattern=".*\S.*" required onChange={(e) => setSearchInput(e.target.value)} />
      <button className="search-btn" onClick={() => searchHandler(searchInput)}>
        <span>Search</span>
      </button>
    </div>


  );
};

export default SearchBar;
