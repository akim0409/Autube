import React from "react";
import { Link } from "react-router-dom";

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <h3>{currentUser.username}</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <nav className="navbar">
      <div className="nav-left">
        <div className="nav-logo">
          <img src="img/autube-logo.svg" alt="" />
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
        <Link to="/login" className="signin-link">
          Sign in
        </Link>
      </div>
    </nav>
    // <div>
    //   <Link to="/signup">Sign Up</Link>
    //   &nbsp;/&nbsp;
    //   <Link to="/login">Sign In</Link>
    // </div>
  );
  return (
    <header>
      <div>{display}</div>
    </header>
  );
};
