import React from "react";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownMenu: false
    };

    this.dropMenu = this.dropMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  dropMenu(e) {
    e.preventDefault();
    this.setState({ dropdownMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(e) {
    this.setState({ dropdownMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>
          {this.props.user.username.slice(0, 1)}
        </button>
      </div>
    );
  }
}
