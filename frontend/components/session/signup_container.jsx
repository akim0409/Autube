import { connect } from "react-redux";
import { createNewUser } from "../../actions/session";
import { Link } from "react-router-dom";
import React from "react";
import SessionForm from "./session_form";

const msp = ({ errors }) => {
  return {
    user: { username: "", password: "", email: "" }
    // errors: errors.session,
    // formType: "signup",
    // navLink: <Link to="/login">Log in instead</Link>
  };
};
const mdp = dispatch => {
  return {
    processForm: formUser => dispatch(createNewUser(formUser))
  };
};

export default connect(
  msp,
  mdp
)(SessionForm);
