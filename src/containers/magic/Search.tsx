import React, { useState } from 'react';

interface SearchProps {
  handleClick: Function;
}

const Search: React.FC<SearchProps> = ({ handleClick }) => {
  const [searchText, setSearchText] = useState('');

  const sendSearch = () => {
    handleClick(searchText);
    setSearchText('');
  };

  return (
    <div className="p-2">
      <div className="favoritesSection ">
        <input
          className="p-2 rounded border-1 bg-gray-900 w-64 mr-1"
          placeholder="Search a github name..."
          type="text"
          value={searchText}
          onChange={(event: React.FormEvent<HTMLInputElement>) =>
            setSearchText(event.currentTarget.value)
          }
        />
        <input
          onClick={sendSearch}
          type="submit"
          value="Find"
          className="rounded bg-gray-900 p-2"
        />
        <div></div>
      </div>
    </div>
  );
};

export default Search;
