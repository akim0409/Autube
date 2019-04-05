import React from "react";
import { Link } from "react-router-dom";

class navBar extends React.Component {
  constructor(props) {
    super(props);
    this.myFunction = this.myFunction.bind(this);
    this.onclick = this.onclick.bind(this);
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
        </div>

        <div className="nav-right">
          <i className="fa fa-video fa-lg nav-icon" />
          <i className="fas fa-ellipsis-v nav-icon" />

          <div>
            {this.props.currentUser ? (
              <div className="icon-user-circle">
                <i
                  onClick={this.myFunction()}
                  // className="far fa-user-circle fa-2x dropbtn"
                  className="fas fa-user-astronaut fa-lg dropbtn nav-icon"
                />

                <div
                  id="myDropdown"
                  // className="hidden"
                  onClick={this.onclick()}
                >
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

// export default ({ currentUser, logout }) => (
//   <nav className="navbar">
//     <div className="nav-left">
//       <div className="nav-logo">
//         <a href="/">
//           <img src={window.logo} />
//         </a>
//       </div>
//     </div>

//     <div className="search-container">
//       <form className="search-form">
//         <div className="search-box">
//           <input type="text" placeholder="Search" />
//         </div>
//         <button type="submit" className="search-button">
//           <FontAwesomeIcon icon="search" />
//         </button>
//       </form>
//     </div>

//     <div className="nav-right">
//       <i className="fa fa-video" />
//       <a href="" className="nav-dropdown">
//         <FontAwesomeIcon icon="video" />
//       </a>
//       <div>
//         {currentUser ? (
//           <div className="icon-user-circle">
//             <FontAwesomeIcon
//               onClick={smyFunction()}
//               // class="dropbtn"
//               icon="user-circle"
//             />
//             <div id="myDropdown" className="icon-user-circle-content">
//               <a href="#">{currentUser.email}</a>
//               <a href="#">My channel</a>
//               <Link to="/" onClick={logout}>
//                 Sign out
//               </Link>
//             </div>
//           </div>
//         ) : (
//           <>
//             <Link to="/login" className="signin-link">
//               sign in
//             </Link>
//           </>
//         )}
//       </div>
//     </div>
//   </nav>
// );
