import React, { useState } from "react";
import { assets } from "../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Ahmedabad");

  const cities = [
    "Ahmedabad",
    "Mumbai",
    "Delhi",
    "Pune",
    "Hyderabad",
    "Jamnagar",
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsDropdownOpen(false);
  };

  return (
    <div className="body">
      <div className="header">
        <div className="logo">
          <img src={assets.book_my_show} alt="" className="logo img" />
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
            className="search-bar input"
          />
        </div>

        <div className="location-dropdown">
          <div class="location-dropdown">
            <select>
              <option>Ahmedabad</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Pune</option>
              <option>Hyderabad</option>
              <option>Banglore</option>
            </select>
          </div>
          {/* <button
            onClick={toggleDropdown}
            className="location-dropdown"
          >
            {selectedCity}
            <span className="location-dropdown select">▼</span>
          </button>

          {isDropdownOpen && (
            <ul className="location-dropdown select">
              {cities.map((city, index) => (
                <li
                  key={index}
                  onClick={() => handleCitySelect(city)}
                  // className=""
                >
                  {city}
                </li>
              ))}
            </ul>
          )} */}
        </div>

        <div className="flex items-center space-x-4 pl-3">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { assets } from "../assets/assets";
// // import './Navbar.css'

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false)
//   const [selectedCity, setSelectedCity] = useState("Ahmedabad")

//   const cities = [
//     "Ahmedabad",
//     "Mumbai",
//     "Delhi",
//     "Pune",
//     "Hyderabad",
//     "Jamnagar",
//   ]

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen)
//   }

//   const handleCitySelect = (city) => {
//     setSelectedCity(city)
//     setIsDropdownOpen(false)
//   };

//   return (
//     <div className="absolute pt-1 pb-0 pl-0 w-full z-10 border bg-white">
//       <div className="container flex items-center justify-between pl-28 pr-15 p-1">
//         <div className="flex items-center">
//           <img src={assets.book_my_show} alt="" className="h-20" />
//         </div>

//         <div className="flex-grow mx-8">
//           <input
//             type="text"
//             placeholder="Search for Movies, Events, Plays, Sports and Activities"
//             className="w-full h-9 pl-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
//           />
//         </div>

//         <div className="relative">
//           <button
//             onClick={toggleDropdown}
//             className="flex items-center pr-5 text-gray-600 border px-4 py-2 rounded-md focus:outline-none"
//           >
//             {selectedCity}
//             <span className="ml-2 pr-">▼</span>
//           </button>

//           {isDropdownOpen && (
//             <ul className="absolute mt-2 w-40 bg-white border rounded-md shadow-lg">
//               {cities.map((city, index) => (
//                 <li
//                   key={index}
//                   onClick={() => handleCitySelect(city)}
//                   className="px-4 py-2 cursor-pointer hover:bg-gray-100"
//                 >
//                   {city}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         <div className="flex items-center space-x-4 pl-3">
//           <button className="bg-red-500 text-white px-4 py-2 rounded-md">
//             Sign in
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
