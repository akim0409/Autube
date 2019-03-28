import React from "react";
import { Link } from "react-router-dom";

const Main = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav>
      <p>helllooo home pg</p>
      <Link to="/login">Sign In</Link>
      &nbsp;/&nbsp;
      <Link to="/signup">Sign Up</Link>
    </nav>
  );

  const signout = () => (
    <div>
      <h2>{currentUser.username}</h2>
      <button onClick={logout}>Sign Out</button>
    </div>
  );

  return currentUser ? signout() : sessionLinks();
};

export default Main;
