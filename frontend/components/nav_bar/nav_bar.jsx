import React from "react";
import { Link } from "react-router-dom";
import VideoFormContainer from "../videos/video_form_container";

class navBar extends React.Component {
  constructor(props) {
    super(props);
    this.myFunction = this.myFunction.bind(this);
    this.myVideoFunction = this.myVideoFunction.bind(this);
    this.onclick = this.onclick.bind(this);
    this.videoClick = this.videoClick.bind(this);
  }
  //same as the one below
  // myFunction() {
  //   document.getElementById("myDropdown").classList.toggle("show");
  // }

  myFunction() {
    return e => {
      $("#myDropdown").toggleClass("show");
    };
  }

  myVideoFunction() {
    return e => {
      $("#videoDrop").toggleClass("show");
    };
  }

  // // Close the dropdown menu if the user clicks outside of it
  // onclick(event) {
  //   if (!event.target.matches(".dropbtn")) {
  //     const dropdowns = document.getElementsByClassName(
  //       "icon-user-circle-content"
  //     );
  //     for (let i = 0; i < dropdowns.length; i++) {
  //       const openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains("show")) {
  //         openDropdown.classList.remove("show");
  //       }
  //     }
  //   }
  // }

  //close the dropdown menu if the user clicks outside of it
  onclick() {
    return e => {
      if (e.target === e.currentTarget) {
        $("#myDropdown").toggleClass("show");
      }
    };
  }

  videoClick() {
    return e => {
      if (e.target === e.currentTarget) {
        $("videoDrop").toggleClass("show");
      }
    };
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-left">
          <i className="fas fa-bars fa-lg" />

          <div className="nav-logo">
            <a href="/">
              <img src={window.logo} />
            </a>
          </div>
        </div>

        <div className="search-container">
          <form className="search-form">
            <div className="search-box">
              <input type="text" placeholder="Search" />
            </div>
            <button type="submit" className="search-button">
              <i className="fas fa-search" />
            </button>
          </form>
          <VideoFormContainer />
        </div>

        <div className="nav-right">
          {/* <div>
            <i
              onClick={this.myFunction()}
              className="fa fa-video fa-lg nav-icon"
            />
            <div id="videoDrop" onClick={this.videoClick()}>
              <div className="icon-user-circle-content">
                <Link to="/" className="dropdown-link">
                  <i className="fab fa-youtube" />
                  <span>Upload video</span>
                </Link>
              </div>
            </div>
          </div> */}

          {/* this line is just dummy */}
          <i className="fas fa-ellipsis-v nav-icon" />

          <div>
            {this.props.currentUser ? (
              <div className="icon-user-circle">
                <i
                  onClick={this.myFunction()}
                  className="fas fa-user-astronaut fa-lg dropbtn nav-icon"
                />

                <div id="myDropdown" onClick={this.onclick()}>
                  <div className="icon-user-circle-content">
                    <div className="dropdown-header">
                      <div className="user-photo" />
                      <div className="user-info">
                        <p className="user-name">
                          {this.props.currentUser.username}
                        </p>
                        <p className="user-email">
                          {this.props.currentUser.email}
                        </p>
                      </div>
                    </div>
                    <a className="dropdown-link">
                      <i className="far fa-user" />
                      <span>My channel</span>
                    </a>
                    <Link
                      to="/"
                      onClick={this.props.logout}
                      className="dropdown-link"
                    >
                      <i className="fas fa-sign-out-alt" />
                      <span>Sign out</span>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Link to="/login" className="nav-icon signin-link">
                  sign in
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default navBar;
