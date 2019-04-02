import React from "react";
import { Route, Switch } from "react-router-dom";
import Video from "../videos/video_index_container";

import NavBarContainer from "../nav_bar/nav_bar_container";

const Main = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>

    <section className="feed-content">
      <div className="container">
        <Video />
        <div className="videos-row">
          <h3 className="title">Trending</h3>
          <div className="video-tile-row">
            <div className="video-tile">
              <div className="img-placeholder" />

              <p className="video-title">Video Title</p>
              <p className="video-owner">Autumn</p>
              <div className="stats">
                <p className="views">360K views &middot;</p>
                <p className="upload-date">4 days ago</p>
              </div>
            </div>
            <div className="video-tile">
              <div className="img-placeholder" />
              <p className="video-title">Video Title</p>
              <p className="video-owner">Autumn</p>
              <div className="stats">
                <p className="views">360K views &middot;</p>
                <p className="upload-date">4 days ago</p>
              </div>
            </div>
            <div className="video-tile">
              <div className="img-placeholder" />
              <p className="video-title">Video Title</p>
              <p className="video-owner">Autumn</p>
              <div className="stats">
                <p className="views">360K views &middot;</p>
                <p className="upload-date">4 days ago</p>
              </div>
            </div>
            <div className="video-tile">
              <div className="img-placeholder" />
              <p className="video-title">Video Title</p>
              <p className="video-owner">Autumn</p>
              <div className="stats">
                <p className="views">360K views &middot;</p>
                <p className="upload-date">4 days ago</p>
              </div>
            </div>
            <div className="video-tile">
              <div className="img-placeholder" />
              <p className="video-title">Video Title</p>
              <p className="video-owner">Autumn</p>
              <div className="stats">
                <p className="views">360K views &middot;</p>
                <p className="upload-date">4 days ago</p>
              </div>
            </div>
            <hr />
          </div>
          <hr />
        </div>

        <div className="videos-row">
          <h3 className="title">Autumn</h3>
          <div className="video-tile-row">
            <div className="video-tile">
              <div className="img-placeholder" />
              <p className="video-title">Video Title</p>
              <p className="video-owner">Autumn</p>
              <div className="stats">
                <p className="views">360K views &middot;</p>
                <p className="upload-date">4 days ago</p>
              </div>
            </div>
            <div className="video-tile">
              <div className="img-placeholder" />
              <p className="video-title">Video Title</p>
              <p className="video-owner">Autumn</p>
              <div className="stats">
                <p className="views">360K views &middot;</p>
                <p className="upload-date">4 days ago</p>
              </div>
            </div>
            <div className="video-tile">
              <div className="img-placeholder" />
              <p className="video-title">Video Title</p>
              <p className="video-owner">Autumn</p>
              <div className="stats">
                <p className="views">360K views &middot;</p>
                <p className="upload-date">4 days ago</p>
              </div>
            </div>
            <div className="video-tile">
              <div className="img-placeholder" />
              <p className="video-title">Video Title</p>
              <p className="video-owner">Autumn</p>
              <div className="stats">
                <p className="views">360K views &middot;</p>
                <p className="upload-date">4 days ago</p>
              </div>
            </div>
            <div className="video-tile">
              <div className="img-placeholder" />
              <p className="video-title">Video Title</p>
              <p className="video-owner">Autumn</p>
              <div className="stats">
                <p className="views">360K views &middot;</p>
                <p className="upload-date">4 days ago</p>
              </div>
            </div>
          </div>
          <hr />
        </div>

        <div className="videos-row">
          <h3 className="title">Autumn</h3>
          <div className="video-tile-row">
            <div className="video-tile">
              <div className="img-placeholder" />
              <p className="video-title">Video Title</p>
              <p className="video-owner">Autumn</p>
              <div className="stats">
                <p className="views">360K views &middot;</p>
                <p className="upload-date">4 days ago</p>
              </div>
            </div>
            <div className="video-tile">
              <div className="img-placeholder" />
              <p className="video-title">Video Title</p>
              <p className="video-owner">Autumn</p>
              <div className="stats">
                <p className="views">360K views &middot;</p>
                <p className="upload-date">4 days ago</p>
              </div>
            </div>
            <div className="video-tile">
              <div className="img-placeholder" />
              <p className="video-title">Video Title</p>
              <p className="video-owner">Autumn</p>
              <div className="stats">
                <p className="views">360K views &middot;</p>
                <p className="upload-date">4 days ago</p>
              </div>
            </div>
            <div className="video-tile">
              <div className="img-placeholder" />
              <p className="video-title">Video Title</p>
              <p className="video-owner">Autumn</p>
              <div className="stats">
                <p className="views">360K views &middot;</p>
                <p className="upload-date">4 days ago</p>
              </div>
            </div>
            <div className="video-tile">
              <div className="img-placeholder" />
              <p className="video-title">Video Title</p>
              <p className="video-owner">Autumn</p>
              <div className="stats">
                <p className="views">360K views &middot;</p>
                <p className="upload-date">4 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 
    <sidebar>
        <SideBar />
    </sidebar> */}
  </div>
);

export default Main;
