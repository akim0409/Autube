import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import home from "./home";

const msp = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  msp,
  mdp
)(home);
