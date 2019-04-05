import React from "react";
import { Route, Switch } from "react-router-dom";
import VideoIndexContainer from "../videos/video_index_container";
import NavBarContainer from "../nav_bar/nav_bar_container";

const Main = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>

    <section className="feed-content">
      <div className="container">
        <VideoIndexContainer />
      </div>
    </section>
    {/* 
    <sidebar>
        <SideBar />
    </sidebar> */}
  </div>
);

export default Main;
