import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ currentUser, logout }) => (
  <nav className="navbar">
    <div className="nav-left">
      <div className="nav-logo">
        <a href="/">
          <img src={window.logo} />
        </a>
      </div>
    </div>

    <div className="search-container">
      <form className="search-form">
        <div className="search-box">
          <input type="text" placeholder="Search" />
        </div>
        <button type="submit" className="search-button">
          <FontAwesomeIcon icon="search" />
        </button>
      </form>
    </div>

    <div className="nav-right">
      <i className="fa fa-video" />
      <a href="" className="nav-dropdown">
        <FontAwesomeIcon icon="video" />
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
