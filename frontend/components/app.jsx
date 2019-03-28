import React from "react";
import Home from "./home/home";
// import NavBarContainer from "./nav_bar/nav_bar_container";
import { Route, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_utils";
import HomeContainer from "./home/home_container";
import SignUpFormContainer from "./session/signup_container";
import LogInFormContainer from "./session/session_form_container";

const App = () => (
  <div>
    <header>
      <Link to="/">
        <h1>AuTube</h1>
      </Link>
      <HomeContainer />
    </header>
    <Switch>
      {/* <Route path="/" component={NavBarContainer} /> */}
      {/* <Route path="videos/:videoId" component={VideoShowContainer} /> */}
      {/* <ProtectedRoute exact path="something like video upload page" component={VideoFormContainer}/> */}
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default App;
