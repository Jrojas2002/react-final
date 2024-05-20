import React from "react";
import useMemory from "../../memory";
import { useNavigate } from "react-router-dom";

const Recommended = ({ imdbID }) => {
  let navigate = useNavigate();
  const { index } = useMemory();

  function handleNavigation(imdbID) {
    navigate(`/movies/${imdbID}`);
    window.location.reload();
  }

  return (
    <>
      <figure className="recommended__movies--wrapper" >
        {index
          .filter((movie) => movie.imdbID !== imdbID)
          .slice(0, 4)
          .map((type) => (
            <img
              className="recommended__movies--img"
              src={type.Poster}
              alt=""
              onClick={() => handleNavigation(type.imdbID)}
            />
          ))}
      </figure>
    </>
  );
};

export default Recommended;
