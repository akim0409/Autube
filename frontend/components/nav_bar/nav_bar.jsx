import React from "react";
import { Link } from "react-router-dom";

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <h3>{currentUser.username}</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <Link to="/signup">Sign Up</Link>
      &nbsp;/&nbsp;
      <Link to="/login">Sign In</Link>
    </div>
  );
  return (
    <header>
      <Link to="/">AuTube</Link>
      <div>{display}</div>
    </header>
  );
};
