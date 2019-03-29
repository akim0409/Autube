import { connect } from "react-redux";
import { createNewUser, clearErrors } from "../../actions/session_actions";
import { Link } from "react-router-dom";
import React from "react";
import SessionForm from "./session_form";

const msp = ({ errors }) => {
  return {
    user: { username: "", password: "", email: "" },
    errors: errors.session,
    formType: "Sign up",
    navLink: <Link to="/login">Sign in instead</Link>
  };
};
const mdp = dispatch => {
  return {
    processForm: formUser => dispatch(createNewUser(formUser)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  msp,
  mdp
)(SessionForm);
