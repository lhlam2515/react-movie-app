import React, { useState } from "react";

const AdvancedSearch = ({ onFilterChange }) => {
  const [genre, setGenre] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [language, setLanguage] = useState("");
  const [ratingRange, setRatingRange] = useState([0, 10]);
  const [sortOption, setSortOption] = useState("popularity.desc");

  const handleFilterChange = () => {
    onFilterChange({
      genre,
      releaseYear,
      language,
      ratingRange,
      sortOption,
    });
  };

  return (
    <div className="advanced-search">
      <div>
        <label>Genre:</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div>
        <label>Release Year:</label>
        <input
          type="text"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
        />
      </div>
      <div>
        <label>Language:</label>
        <input
          type="text"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
      </div>
      <div>
        <label>Rating Range:</label>
        <input
          type="number"
          value={ratingRange[0]}
          onChange={(e) =>
            setRatingRange([Number(e.target.value), ratingRange[1]])
          }
        />
        <input
          type="number"
          value={ratingRange[1]}
          onChange={(e) =>
            setRatingRange([ratingRange[0], Number(e.target.value)])
          }
        />
      </div>
      <div>
        <label>Sort By:</label>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="popularity.desc">Popularity</option>
          <option value="release_date.desc">Release Date</option>
          <option value="vote_average.desc">Rating</option>
        </select>
      </div>
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default AdvancedSearch;
