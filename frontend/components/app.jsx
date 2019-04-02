import React from "react";
import Home from "./home/home";
import SignUpFormContainer from "./session/signup_container";
import LogInFormContainer from "./session/session_form_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_utils";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far);

const App = () => (
  <div>
    <Switch>
      {/* <Route path="videos/:videoId" component={VideoShowContainer} /> */}
      {/* <ProtectedRoute exact path="something like video upload page" component={VideoFormContainer}/> */}
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <AuthRoute path="/login" component={LogInFormContainer} />
      <Route path="/" component={Home} />
    </Switch>
  </div>
);

export default App;
