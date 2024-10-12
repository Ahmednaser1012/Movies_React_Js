import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Movies() {
  const [moviees, setMovies] = useState([]);
  function gett() {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=52bbcddeda849047525b51d6f8a12361"
      )
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data.results);
      });
  }
  gett();

  /*//********************* */

  // const [weatherData, setWeatherData] = useState(null);

  // useEffect(() => {
  //   fetch(
  //     "https://api.themoviedb.org/3/trending/tv/day?api_key=52bbcddeda849047525b51d6f8a12361"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setWeatherData(data));
  // }, []);
  // console.log(weatherData);
  /*/*/ ///////////////////////////////////////

  // const movies = [
  //   {
  //     id: 1,
  //     name: "Movie1",
  //     imgPath:
  //       "https://upload.wikimedia.org/wikipedia/en/7/76/Home_alone_poster.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Movie2",
  //     imgPath:
  //       "https://upload.wikimedia.org/wikipedia/en/7/76/Home_alone_poster.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Movie3",
  //     imgPath:
  //       "https://upload.wikimedia.org/wikipedia/en/7/76/Home_alone_poster.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "Movie4",
  //     imgPath:
  //       "https://upload.wikimedia.org/wikipedia/en/7/76/Home_alone_poster.jpg",
  //   },
  //   {
  //     id: 5,
  //     name: "Movie5",
  //     imgPath:
  //       "https://upload.wikimedia.org/wikipedia/en/7/76/Home_alone_poster.jpg",
  //   },
  //   {
  //     id: 6,
  //     name: "Movie6",
  //     imgPath:
  //       "https://upload.wikimedia.org/wikipedia/en/7/76/Home_alone_poster.jpg",
  //   },
  // ];

  //   const movielist = movies.map((movie) => {
  //     return (
  //       //   <div className="container">
  //       //     <div className="row">
  //       //       <div className="col-md-3 col-lg-3">
  //       //         <img src={movie.imgPath} alt={movie.name} className="w-100" />
  //       //         <h2>{movie.name}</h2>
  //       //       </div>
  //       //     </div>
  //       //   </div>

  //     //   <div className="move">
  //     //     <div key={movie.id}>
  //     //       <img src={movie.imgPath} alt={movie.name} />
  //     //       <h2 className="titile">{movie.name}</h2>
  //     //     </div>
  //     //   </div>
  //     );
  //   });

  const movieslist = moviees.map((move) => {
    return (
      <div className="box" key={move.id}>
        <img
          src={"https://image.tmdb.org/t/p/original" + move.backdrop_path}
          alt=""
        />
        <h3>{move.title}</h3>
        <p>--{move.overview}</p>
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
            Movies
            <br />
            to watch now
          </h3>
          <p className="secondColor">most watched movies by days</p>
          <div className="border"></div>
          <div className="box-container">
            {/* {moviees.map((move) => {
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
            {movieslist};
          </div>
        </section>
      </div>
    </>
  );
}
