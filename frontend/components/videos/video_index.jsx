import React from "react";
import VideoIndexItem from "./video_index_item";

class VideoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  //     ? this.props.videos.map((video, idx) => (
  //       <VideoIndexItem key={idx} video={video} />

  render() {
    if (this.props.videos === undefined) return null;

    const allVideos = Object.values(this.props.videos);
    const indexItems = allVideos.map(video => {
      return <VideoIndexItem key={video.id} video={video} />;
    });

    //one particular video
    // if (this.props.videos[6] === undefined) return null;

    return (
      <div>
        {/* <video
            className="video"
            src={this.props.videos[6].imageUrl}
            // autoPlay
            controls
          /> */}

        <div className="videos-row">
          <h3 className="title">Recommended</h3>
          {/* Line 38 should be created dynamically, pull videos from database, every 5 videos create video-tile-row and populate */}
          <div className="video-tile-row">{indexItems}</div>
        </div>
      </div>
    );
  }
}

export default VideoIndex;
