import React from "react";
import Home from "./home/home";
import SignUpFormContainer from "./session/signup_container";
import LogInFormContainer from "./session/session_form_container";
import VideoShowContainer from "./videos/video_show_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_utils";

const App = () => (
  <div>
    <Switch>
      {/* <Route path="/videos/:videoId" component={VideoShowContainer} /> */}
      <Route path="/videos/:videoId" component={VideoShowContainer} />
      {/* <ProtectedRoute exact path="/home/videos/create" component={VideoFormContainer}/> */}
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <AuthRoute path="/login" component={LogInFormContainer} />
      <Route path="/" component={Home} />
    </Switch>
  </div>
);

export default App;
