import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Tv() {
  const [tvv, setTv] = useState([]);
  function gett() {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/tv/day?api_key=52bbcddeda849047525b51d6f8a12361"
      )
      .then((response) => {
        setTv(response.data.results);
        console.log(response.data.results);
      });
  }
  gett();

  /*//********************* */

  const tvlist = tvv.map((tvvv) => {
    return (
      <div className="box" key={tvvv.id}>
        <img
          src={"https://image.tmdb.org/t/p/original" + tvvv.backdrop_path}
          alt=""
        />
        <h3>{tvvv.name}</h3>
        <p>--{tvvv.overview}</p>
      </div>
    );
  });

  return (
    <>
      {/* <div className="container">
        <div className="row ">
          <div className="col-md-4">
            <div className="brd w-50"></div>
            <h3>
              Trending <br />
              Movies
              <br />
              to watch now
            </h3>
            <p className="secondColor">most watched movies by days</p>
            <div className="brd w-100"></div>
          </div>
          <div className="col-md-4 col-lg-4 ">{movielist}</div>
        </div>
      </div> */}
      <div className="container">
        <section className="products" id="menu">
          <h3>
            Trending <br />
            TV 2024
            <br />
            to watch now
          </h3>
          <p className="secondColor">most watched movies by days</p>
          <div className="border"></div>
          <div className="box-container">
            {/* {tvv.map((tvvv) => {
              return (
                <div className="box" key={move.id}>
                  <img
                    src={
                      "https://image.tmdb.org/t/p/original" + move.backdrop_path
                    }
                    alt=""
                  />
                  <h3>{move.name}</h3>
                  <p>--{move.overview}</p>
                </div>
              );
            })} */}
            {tvlist};
          </div>
        </section>
      </div>
    </>
  );
}
