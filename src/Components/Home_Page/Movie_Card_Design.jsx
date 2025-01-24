import React from "react";
import "./Home.css";
import Banner from "./Banner";

const Movie_Card_Design = ({
  movies,
  pageNo,
  HandlePrev,
  HandleNext,
  addToWatchlist,
  removeFromWatchlist,
}) => {
  return (
    <>
      <Banner />
      <div>
        <div className="text-content">
          <h2>Trending Movies</h2>
        </div>

        <div className="row">
          {movies.map((movie) => (
            <div className="column" key={movie.id}>
              <div className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="inner-img"
                />
                <h3 className="card-title">{movie.original_title}</h3>
                <p>Rating: {movie.vote_average}/10</p>
                <button
                  onClick={() => {
                    if (!movie.isHeart) {
                      addToWatchlist(movie);
                    } else {
                      removeFromWatchlist(movie.id);
                    }
                  }}
                >
                  {movie.isHeart ? "❌" : "❤️"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <p onClick={HandlePrev} disabled={pageNo == 1}>
            <span>&laquo;</span>
          </p>
          <p>{pageNo}</p>
          <p onClick={HandleNext}>
            <span>&raquo;</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Movie_Card_Design;
