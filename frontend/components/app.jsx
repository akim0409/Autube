import React from "react";
import Home from "./home/home";
import NavBarContainer from "./nav_bar/nav_bar_container";
import SignUpFormContainer from "./session/signup_container";
import LogInFormContainer from "./session/session_form_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_utils";

const App = () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Switch>
      {/* <Route path="videos/:videoId" component={VideoShowContainer} /> */}
      {/* <ProtectedRoute exact path="something like video upload page" component={VideoFormContainer}/> */}
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <AuthRoute path="/login" component={LogInFormContainer} />
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/" component={HomeContainer} /> */}
    </Switch>
  </div>
);

export default App;
