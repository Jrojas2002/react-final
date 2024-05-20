import React, { useState } from "react";
import Movie from "./ui/Movie";

const Movies = () => {
  const name = localStorage.getItem("input");
  const [option, setOption] = useState();

  function filterChange(filter) {
    setOption(filter);
  }

  return (
    <section id="movie__header">
      <div className="row">
        <div className="search__header">
          <h2 id="results" className="results">
            <span className="blue">Results</span> "{name}"
          </h2>
          <select
            defaultValue="DEFAULT"
            id="filter"
            className="Sort"
            onChange={(event) => filterChange(event.target.value)}
          >
            <option value="DEFAULT" disabled>
              Sort
            </option>
            <option value="OLD_TO_NEW">Oldest to Newest</option>
            <option value="NEW_TO_OLD">Newest to Oldest</option>
          </select>
        </div>
        <div className="movies">
          <Movie option={option} />
        </div>
      </div>
    </section>
  );
};

export default Movies;
