import React, { useState } from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />

        <input
          type="text"
          placeholder="Search through thousands of movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <button onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}>
        {showAdvancedSearch ? "Hide Advanced Search" : "Show Advanced Search"}
      </button>
    </div>
  );
};

export default Search;
