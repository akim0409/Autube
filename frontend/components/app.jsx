import React from "react";
import Home from "../home/home";

// import LoginFormContainer from "./session_form/login_form_container";
// import SignupFormContainer from "./session_form/signup_form_container";

const App = () => (
  <div>
    <Switch>
      {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
      {/* <AuthRoute path="/signup" component={SignupFormContainer} /> */}
      <Route path="/" component={Home} />
    </Switch>
  </div>
);

export default App;
