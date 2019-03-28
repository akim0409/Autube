import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      // email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  // showErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={i}>{error}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  render() {
    return (
      <div className="login">
        <div className="login-header">
          <h2>Sign up</h2>
          <h3>to continue to AuTube</h3>
        </div>
        <form onSubmit={this.handleSubmit}>
          {/* {this.showErrors()} */}
          <label>
            <input
              type="text"
              value={this.state.username}
              placeholder="Username or Email"
              onChange={this.handleInput("username")}
            />
          </label>

          <label>
            <input
              type="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.handleInput("password")}
            />
          </label>

          <p>Don't have an account and too lazy to create one?</p>
          <a href="">Sign in as a demo user</a>

          <div className="form-links">
            <a href="">Create account</a>
            <input type="submit" className="signin-button" value="Sign in" />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
