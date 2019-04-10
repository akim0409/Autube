import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";

// import { Link } from "react-router-dom";

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId);
  }

  render() {
    if (this.props.video === undefined) return null;
    return (
      <div>
        <header>
          <NavBarContainer />
        </header>
        <div className="video-page">
          <div className="video-column">
            <section className="video-main">
              <div className="video">
                <video
                  // autoPlay
                  controls
                  src={this.props.video.videoUrl}
                />
              </div>
              <div className="video-details">
                <h3 className="video-main-title">{this.props.video.title}</h3>
                <div className="flex-row-content video-sub-details">
                  <p className="video-views">2,034 views</p>
                  <div className="video-controls">
                    <a href="" className="like-btn">
                      <i className="fa fa-thumbs-up" /> 166
                    </a>
                    <a href="" className="dislike-btn">
                      <i className="fa fa-thumbs-down" /> 39
                    </a>
                    <a href="" className="share-btn">
                      <i className="fa fa-share" /> Share
                    </a>
                  </div>
                </div>
                <hr />
                <div className="flex-row-content video-author-details">
                  <div className="author-info">
                    <div className="user-photo author-photo" />
                    <div className="author-info-text">
                      <p className="author">Uploader</p>
                      <p className="publish-date">Published on April 4, 2019</p>
                    </div>
                  </div>
                  <button className="subscribe">
                    Subscribe <span className="subscription-count">60K</span>
                  </button>
                </div>
                <div className="video-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Are you excited about the movie? Let us know in the comments
                    below.
                  </p>
                  <div className="video-category">
                    <p>Category</p>
                    <a href="" className="categories">
                      Movies
                    </a>
                  </div>
                </div>
                <hr />
              </div>
            </section>
            <section className="comments">
              <div className="comment-header">
                <p>3 Comments</p>
              </div>

              <div className="add-comment-section">
                <div className="user-photo author-photo" />
                <form action="" className="comment-form">
                  <input
                    id="input-comment"
                    type="text"
                    placeholder="Add a public comment..."
                  />
                  <div className="form-controls">
                    <button className="form-button cancel">Cancel</button>
                    <button className="form-button add-comment">Comment</button>
                  </div>
                </form>
              </div>

              <div className="comment">
                <div className="user-photo" />
                <div className="comment-content">
                  <div className="comment-head">
                    <p>
                      <span className="comment-username">Musicman77</span>{" "}
                      <span className="comment-upload-date">3 days ago</span>
                    </p>
                  </div>
                  <p className="comment-text">
                    This movie looks SICK! I can't wait to watch it with my
                    friends.
                  </p>
                  <div className="comment-controls">
                    <a href="" className="like-btn">
                      <i className="fa fa-thumbs-up" /> 16
                    </a>
                    <a href="" className="dislike-btn">
                      <i className="fa fa-thumbs-down" />
                    </a>
                    <a href="" className="comment-reply">
                      REPLY
                    </a>
                  </div>
                </div>
              </div>

              <div className="comment">
                <div className="user-photo" />
                <div className="comment-content">
                  <div className="comment-head">
                    <p>
                      <span className="comment-username">Areumous</span>{" "}
                      <span className="comment-upload-date">1 week ago</span>
                    </p>
                  </div>
                  <p className="comment-text">
                    I am a comment. This video rocks!
                  </p>
                  <div className="comment-controls">
                    <a href="" className="like-btn">
                      <i className="fa fa-thumbs-up" /> 2
                    </a>
                    <a href="" className="dislike-btn">
                      <i className="fa fa-thumbs-down" /> 1
                    </a>
                    <a href="" className="comment-reply">
                      REPLY
                    </a>
                  </div>
                </div>
              </div>

              <div className="comment">
                <div className="user-photo" />
                <div className="comment-content">
                  <div className="comment-head">
                    <p>
                      <span className="comment-username">Not Peter Parker</span>{" "}
                      <span className="comment-upload-date">2 weeks ago</span>
                    </p>
                  </div>
                  <p className="comment-text">Nice.</p>
                  <div className="comment-controls">
                    <a href="" className="like-btn">
                      <i className="fa fa-thumbs-up" />
                    </a>
                    <a href="" className="dislike-btn">
                      <i className="fa fa-thumbs-down" />
                    </a>
                    <a href="" className="comment-reply">
                      REPLY
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="video-playlist">
            <div className="up-next">
              <p>Up next</p>
              <div className="video-preview">
                <img src="" className="video-thumbnail" />
                <div className="video-preview-info">
                  <p className="video-preview-title">Video name</p>
                  <p className="video-preview-author">Uploader</p>
                  <p className="video-preview-views">1.2M views</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="suggestions">
              <div className="video-preview">
                <img src="" className="video-thumbnail" />
                <div className="video-preview-info">
                  <p className="video-preview-title">
                    Stuck at Work | Beautiful Chill Mix
                  </p>
                  <p className="video-preview-author">Musicman77</p>
                  <p className="video-preview-views">4.5M views</p>
                </div>
              </div>
              <div className="video-preview">
                <img src="" className="video-thumbnail" />
                <div className="video-preview-info">
                  <p className="video-preview-title">
                    Kittens Play with Puppies
                  </p>
                  <p className="video-preview-author">winnielove</p>
                  <p className="video-preview-views">100k views</p>
                </div>
              </div>
              <div className="video-preview">
                <img src="" className="video-thumbnail" />
                <div className="video-preview-info">
                  <p className="video-preview-title">
                    Avengers End Game Trailer
                  </p>
                  <p className="video-preview-author">movieFan</p>
                  <p className="video-preview-views">5M views</p>
                </div>
              </div>
              <div className="video-preview">
                <img src="" className="video-thumbnail" />
                <div className="video-preview-info">
                  <p className="video-preview-title">Harry Potter soundtrack</p>
                  <p className="video-preview-author">harrypotterforever</p>
                  <p className="video-preview-views">10M views</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoShow;
