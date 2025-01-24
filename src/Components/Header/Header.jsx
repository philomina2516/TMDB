import React from "react";
import { assets } from "../../assets/assets";
import "./Header.css";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="main_header">
        <ul className="header_content">
          <div className="logo">
            <img className="logo-img" src={assets.TMDB} alt="" href="/" />
            <Link as={Link} to="/" className="content_value">
              Movie
            </Link>     
            <Link as={Link} to="/watchlist" className="content_value">
              WatchList
            </Link>
          </div>
                  </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
