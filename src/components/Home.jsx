import React, { useEffect, useState } from "react";
import LandingImg from "../assets/undraw_home_cinema_l7yl (1).svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [title, setTitle] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        "https://www.omdbapi.com/?i=tt3896198&apikey=ee7c6501"
      );
      // console.log(data)
    }
    fetchData();
  }, []);

  function searchChange() {
    // console.log(title);
    localStorage.setItem("input", title);
    navigate("/movies");
  }

  return (
    <section id="landing">
      <div className="row">
        <div className="heading">
          <h1 className="title">
            America's Most Awarded Search Engine For Movies.
          </h1>
        </div>
        <div className="sub-heading">
          <h3 className="sub">
            Find the <span className="blue">perfect movie</span> for you here!
          </h3>
        </div>
        <div className="search">
          <input
            className="search__input"
            type="text"
            placeholder="Search by Title"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            onKeyDown={(event) => event.key === "Enter" && searchChange()}
          />
          <button
            id="search__btn"
            className="search__btn"
            onClick={() => searchChange()}
          >
            Go!
          </button>
        </div>
        <div className="landing__img">
          <img className="movie__img" src={LandingImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
