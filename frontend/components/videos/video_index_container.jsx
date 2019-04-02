import { connect } from "react-redux";
import VideoIndex from "./video_index";
import { fetchVideos } from "../../actions/videos_actions";

const msp = state => {
  return {
    videos: state.entities.videos
  };
};

const mdp = dispatch => {
  return {
    fetchVideos: () => dispatch(fetchVideos())
  };
};

export default connect(
  msp,
  mdp
)(VideoIndex);
