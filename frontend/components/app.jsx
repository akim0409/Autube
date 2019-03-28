import React from "react";
import Home from "../home/home";
// import NavBarContainer from "./nav_bar/nav_bar_container";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_utils";

import SignUpContainer from "./session/signup_container";

const App = () => (
  <div>
    {/* <Route path="/" component={NavBarContainer} /> */}
    <Route exact path="/" component={Home} />
    {/* <ProtectedRoute path="something like video upload page" component={VideoUploadContainer}/> */}
    <AuthRoute path="/signup" component={SignUpContainer} />
  </div>
);

export default App;
