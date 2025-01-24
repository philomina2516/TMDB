import React, { useState, useEffect } from "react";
import Movie_Card_Design from "./Movie_Card_Design";

const Movie_Cards = ({
  movies,
  setMovies,
  watchList,
  addToWatchlist,
  removeFromWatchlist,
}) => {
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchMovies() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        },
      };

      await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNo}`,
        options
      )
        .then((res) => res.json())
        .then((res) => {
          const updatedMovies = res.results.map((movie) => {
            const isInWatchList = watchList.some(
              (watchlistMovie) => watchlistMovie.id == movie.id
            );
            return { ...movie, isHeart: isInWatchList }
          })
          setMovies(updatedMovies)
          setTotalPages(res.total_pages)
        })
        .catch((err) => console.error(err))
    }

    fetchMovies();
  }, [pageNo, watchList])

  const HandlePrev = () => {
    setPageNo((prev) => (prev <= 1 ? 1 : prev - 1));
  };

  const HandleNext = () => {
    setPageNo((prev) => (prev >= totalPages ? totalPages : prev + 1));
  };

  return (
    <Movie_Card_Design
      movies={movies}
      pageNo={pageNo}
      HandlePrev={HandlePrev}
      HandleNext={HandleNext}
      addToWatchlist={addToWatchlist}
      removeFromWatchlist={removeFromWatchlist}
    />
  );
};

export default Movie_Cards;