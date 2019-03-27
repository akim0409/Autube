import React from "react";
import Home from "../home/home";
import { Route } from "react-router-dom";
// import NavBarContainer from './nav_bar/nav_bar_container';

import SignUpContainer from "./session/signup_container";

const App = () => (
  <div>
    {/* <Route path='/' component={NavBarContainer} /> */}
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={SignUpContainer} />
  </div>
);

export default App;
