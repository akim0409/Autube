import { connect } from "react-redux";
import { loginUser } from "../../actions/session_actions";
import { Link } from "react-router-dom";
import React from "react";
import SessionForm from "./session_form";

const msp = ({ errors }) => {
  return {
    user: {
      username: "",
      password: ""
    },
    errors: errors.session,
    formType: "Sign In",
    navLink: <Link to="/signup">Sign up instead</Link>
  };
};
const mdp = dispatch => {
  return {
    processForm: formUser => dispatch(loginUser(formUser))
  };
};

export default connect(
  msp,
  mdp
)(SessionForm);
