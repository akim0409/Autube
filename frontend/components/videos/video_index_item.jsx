import React from "react";
import { Link } from "react-router-dom";

const videoIndexItem = ({ video }) => (
  <Link to={`/videos/${video.id}`}>
    <div>{video.title}</div>
    {/* <div>{user.username}</div> */}
    <div>{video.createdAt}</div>
  </Link>
);
