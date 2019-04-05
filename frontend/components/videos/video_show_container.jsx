import React from "react";
import { connect } from "react-redux";
import VideoShow from "./video_show";
import { fetchVideo } from "../../actions/videos_actions";
import { withRouter } from "react-router-dom";

const msp = (state, ownProps) => {
  return {
    video: state.entities.videos[ownProps.match.params.videoId]
  };
};

const mdp = dispatch => {
  return {
    fetchVideo: id => dispatch(fetchVideo(id))
  };
};

export default withRouter(
  connect(
    msp,
    mdp
  )(VideoShow)
);
