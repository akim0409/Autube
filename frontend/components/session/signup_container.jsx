import { connect } from "react-redux";
import { createNewUser } from "../../actions/session";
import SignUp from "./signup";



const mdp => dispatch => {
    return {
        createNewUser: formUser => dispatch(createNewUser(formUser))
    };
};

export default connect(null, mdp)(SignUp);