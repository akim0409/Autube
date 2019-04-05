import React from "react";
import { Link } from "react-router-dom";

const videoIndexItem = ({ video }) => {
  return (
    <div className="video-tile">
      <Link to={`/videos/${video.id}`}>
        <img className="video-tile-thumbnail" src={video.imageUrl} />
        <p className="video-title">{video.title}</p>
        <p className="video-owner">Autumn</p>
        <div className="stats">
          <p className="views">360K views &middot;</p>
          <p className="upload-date">4 days ago</p>
        </div>
        {/* <p className="video-owner">{video.userId.username}</p> */}
        {/* <div>{video.user.username}</div> */}
        {/* <div>{video.uploadDate}</div> */}
      </Link>
    </div>
  );
};

export default videoIndexItem;
