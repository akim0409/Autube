import React from "react";
// import VideoIndexItem from "./video_index_item";

class VideoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    if (this.props.videos[3] === undefined) return null;

    return (
      <div>
        <div>
          <video
            className="video"
            src={this.props.videos[3].videoUrl}
            autoPlay
            controls
          />
        </div>
      </div>
    );
  }
}

export default VideoIndex;
