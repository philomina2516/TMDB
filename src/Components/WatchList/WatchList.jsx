import React, { useState } from "react";
import "./WatchList.css";

const WatchList = ({ watchList, removeFromWatchlist }) => {
  const [search, setSearch] = useState("");

  const filteredWatchList = watchList.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="watchlist-container">
        <div className="search-bar">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Movie"
            className="input"
          />
        </div>
        <div className="watchlist-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Ratings</th>
                <th>Popularity</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {filteredWatchList.length > 0 ? (
                filteredWatchList.map((movie) => (
                  <tr key={movie.id}>
                    <td>{movie.title}</td>
                    <td>{movie.vote_average}</td>
                    <td>{movie.popularity.toFixed(1)}</td>
                    <td>
                      <button onClick={() => removeFromWatchlist(movie.id)}>
                        ❌
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No movies found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WatchList;


// import React, { useState } from "react";
// import "./WatchList.css";

// const WatchList = ({ watchList, removeFromWatchlist }) => {
//   const [searchQuery, setSearch] = useState("")
//   const [filteredWatchList, setFilteredWatchList] = useState(watchList)

//   const handleSearch = () => {
//     if (searchQuery.trim()) {
//       const searchResults = watchList.filter((movie) =>
//         movie.title.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFilteredWatchList(searchResults);
//     } else {
//       alert("Please enter a movie name to search.");
//     }
//   };

//   const handleClearSearch = () => {
//     setSearch("")
//     setFilteredWatchList(watchList)
//   };

//   return (
//     <div>
//       <div className="watchlist-container">
//         <div className="search-bar">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearch(e.target.value)}
//             placeholder="Search Movie"
//             className="input"
//           />
//           {/* <button onClick={handleSearch} className="search-button">
//             Search
//           </button>
//           <button onClick={handleClearSearch} className="search-button">
//           ❌
//           </button> */}
//         </div>
//         <div className="watchlist-table">
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Ratings</th>
//                 <th>Popularity</th>
//                 <th>Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredWatchList.length > 0 ? (
//                 filteredWatchList.map((movie) => (
//                   <tr key={movie.id}>
//                     <td>{movie.title}</td>
//                     <td>{movie.vote_average}</td>
//                     <td>{movie.popularity.toFixed(1)}</td>
//                     <td>
//                       <button onClick={() => removeFromWatchlist(movie.id)}>
//                         ❌
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="4">No movies found.</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WatchList;
