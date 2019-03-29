import React from "react";
import { Link } from "react-router-dom";

export default ({ currentUser, logout }) => (
  <nav className="navbar">
    <div className="nav-left">
      <div className="nav-logo">
        {/* <img src={require("../images/autube-logo.svg")} /> */}
      </div>
    </div>

    <div className="search-container">
      <form className="search-form">
        <div className="search-box">
          <input type="text" placeholder="Search" />
        </div>
        <button type="submit" className="search-button">
          <i className="fa fa-search" />
        </button>
      </form>
    </div>

    <div className="nav-right">
      <a href="" className="nav-dropdown">
        <i className="fas fa-video" />
      </a>
      <div>
        {currentUser ? (
          <button onClick={logout}>Sign out</button>
        ) : (
          <>
            <Link to="/login" className="signin-link">
              sign in
            </Link>
          </>
        )}
      </div>
    </div>
  </nav>
);
