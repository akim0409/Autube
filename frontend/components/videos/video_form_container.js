import { connect } from "react-redux";
import { createVideo } from "../../actions/videos_actions";
import VideoForm from "./video_form";

const msp = state => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.videos
  };
};

const mdp = dispatch => {
  return {
    createVideo: video => dispatch(createVideo(video))
  };
};

export default connect(
  msp,
  mdp
)(VideoForm);
