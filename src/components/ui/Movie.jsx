import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import useMemory from "../../memory";

const Movie = ({ option }) => {
  const { index, loading } = useMemory();
  let navigate = useNavigate();

  function filteredMovies() {
    if (option === "OLD_TO_NEW") {
      index.sort((a, b) => a.Year - b.Year);
    }
    if (option === "NEW_TO_OLD") {
      index.sort((a, b) => b.Year - a.Year);
    }
  }
  filteredMovies();

  return (
    <>
      {loading ? (
        <FontAwesomeIcon className="fa-spinner" icon="spinner" />
      ) : (
        index.slice(0, 9).map((obj) => (
          <div className="movie" onClick={() => navigate(`${obj.imdbID}`)}>
            <figure className="movie__img--wrapper">
              <img className="movies__img" src={obj.Poster} alt="" />
            </figure>
            <div className="movie__title">
              <b className="blue">Title:</b> {obj.Title}
            </div>
            <div className="movie__rating">
              <b className="blue">imdbID:</b> {obj.imdbID}
            </div>
            <div className="movie__year">
              <b className="blue">Released Year:</b> {obj.Year}
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Movie;
