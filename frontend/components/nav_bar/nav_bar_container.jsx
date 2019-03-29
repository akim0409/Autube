import { connect } from "react-redux";
import NavBar from "./nav_bar";
import { logoutUser } from "../../actions/session_actions";

const msp = state => ({
  currentUser: state.session.currentUser
});

const mdp = dispatch => ({
  logout: () => dispatch(logoutUser())
});

export default connect(
  msp,
  mdp
)(NavBar);
