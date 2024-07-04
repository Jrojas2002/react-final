import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import Recommended from "./ui/Recommended";
import Information from "./ui/Information";
import useAnotherMemory from "../memory2";

const MovieInfo = () => {
  let navigate = useNavigate();
  const { movie, imdbID } = useAnotherMemory();

  return (
    <div className="information">
      <div className="row">
        <div className="info__header">
          <FontAwesomeIcon
            className="icon__back"
            icon="fa-solid fa-arrow-left"
            onClick={() => ("/movies")}
          />
        </div>
        <div className="movie__info">
          <div className="info__body">
            <figure className="info__img--wrapper">
              {movie.map((type) => (
                <>
                  <img className="info__img" src={type.Poster} alt="" />
                </>
              ))}
            </figure>
            <div className="info__details">
              <Information />
            </div>
          </div>
        </div>
        <div className="movie__recommendations">
          <div className="recommedations__header">
            <h2 className="blue recomm__title">Recommended Movies</h2>
          </div>
          <div className="recommendations">
            {<Recommended imdbID={imdbID} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
