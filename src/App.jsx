import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header"
import Banner from "./Components/Home_Page/Banner"
import Movie_Cards from "./Components/Home_Page/Movie_Cards"
import WatchList from "./Components/WatchList/WatchList"

const App = () => {
  const initialWatchList = JSON.parse(localStorage.getItem("watchlist")) || []
  const [watchList, setWatchList] = useState(initialWatchList)
  const [movies, setMovies] = useState([])

  const addToWatchlist = (movie) => {
      const updatedWatchList = [...watchList, movie]
      setWatchList(updatedWatchList)
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchList))
  }

  const removeFromWatchlist = (movieId) => {
    const updatedWatchList = watchList.filter((movie) => movie.id !== movieId)
    setWatchList(updatedWatchList)
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchList))
  }

  return (
    <Router>
      <Header />      
      <Routes>
        <Route
          path="/"
          element={
            <Movie_Cards
              movies={movies}
              setMovies={setMovies}
              watchList={watchList}
              addToWatchlist={addToWatchlist}
              removeFromWatchlist={removeFromWatchlist}
            />
          }
        />
        <Route
          path="/watchlist"
          element={
            <WatchList
              watchList={watchList}
              removeFromWatchlist={removeFromWatchlist}
            />
          }
        />
      </Routes>
    </Router>
  )
}

export default App


// import React, { useState, useEffect } from "react"
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// import Header from "./Components/Header/Header"
// import Banner from "./Components/Home_Page/Banner"
// import Movie_Cards from "./Components/Home_Page/Movie_Cards"
// import WatchList from "./Components/WatchList/WatchList"

// const App = () => {
//   const initialWatchList = JSON.parse(localStorage.getItem("watchlist")) || []
//   const [watchList, setWatchList] = useState(initialWatchList)
//   const [movies, setMovies] = useState([])

//   const addToWatchlist = (movie) => {
//     if (!watchList.find((item) => item.id == movie.id)) {
//       const updatedWatchList = [...watchList, movie]
//       setWatchList(updatedWatchList)
//       localStorage.setItem("watchlist", JSON.stringify(updatedWatchList))
//       updateMovieHeart(movie.id, true)
//     }
//   }
  
//   const removeFromWatchlist = (movieId) => {
//     const updatedWatchList = watchList.filter((movie) => movie.id !== movieId)
//     setWatchList(updatedWatchList)
//     localStorage.setItem("watchlist", JSON.stringify(updatedWatchList))
//     updateMovieHeart(movieId, false)
//   }

//   const updateMovieHeart = (movieId, isHeart) => {
//     setMovies((prevMovies) =>
//       prevMovies.map((movie) =>
//         movie.id == movieId ? { ...movie, isHeart } : movie
//       )
//     )
//   }

//   const toggleEmoji = (movieId) => {
//     const movie = movies.find((movie) => movie.id == movieId)
//     if (movie) {
//       const isHeart = !movie.isHeart
//       updateMovieHeart(movieId, isHeart)
//       if (isHeart) {
//         addToWatchlist(movie)
//       } else {
//         removeFromWatchlist(movieId)
//       }
//     }
//   }

//   return (
//     <Router>
//       <Header />
//       <Banner />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Movie_Cards
//               movies={movies}
//               setMovies={setMovies}
//               toggleEmoji={toggleEmoji}
//               addToWatchlist={addToWatchlist}
//             />
//           }
//         />
//         <Route
//           path="/watchlist"
//           element={
//             <WatchList
//               watchList={watchList}
//               removeFromWatchlist={removeFromWatchlist}
//             />
//           }
//         />
//       </Routes>
//     </Router>
//   )
// }

// export default App