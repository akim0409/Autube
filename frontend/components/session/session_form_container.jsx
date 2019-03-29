import { connect } from "react-redux";
import { loginUser, clearErrors } from "../../actions/session_actions";
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
    formType: "Sign in",
    navLink: <Link to="/signup">Create account</Link>
  };
};
const mdp = dispatch => {
  return {
    processForm: formUser => dispatch(loginUser(formUser)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  msp,
  mdp
)(SessionForm);
