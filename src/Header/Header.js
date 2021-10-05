import { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class Header extends Component {
  // FOR REGISTER
  state = {
    username: "",
    email: "",
    password: "",
  };

  onChangeRegister = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  registerButton = (e) => {
    e.preventDefault(); //do not let the page to reload when submit button is clicked
    //send data to our API
    const signUpData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    axios.post("http://localhost:90/user/register", signUpData);
    /***********************OR **********************/
    //axios.post("http://localhost:90/user/register", this.state);
  };
  //END OF REGISTER

  //FOR LOGIN
  state = {
    username: "",
    password: "",
  };

  onChangeLogin = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  loginButton = (e) => {
    e.preventDefault();
    //need to send data to the API through logInData
    const logInData = {
      username: this.state.username,
      password: this.state.password,
    };
    axios
      .post("http://localhost:90/user/login", logInData)
      /***********************OR **********************/
      //axios.post("http://localhost:90/user/login", this.state);
      .then((result) => {
        console.log(result.data.token);
        //saves the token so that you can get anywhere in your website
        localStorage.setItem("token", result.data.token);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  //END OF LOGIN

  render() {
    return (
      <>
        <div id="preloader">
          <img
            className="logo"
            src="images/logo1.png"
            alt=""
            width="119"
            height="58"
          />
          <div id="status">
            <span></span>
            <span></span>
          </div>
        </div>

        {/* LOGIN */}
        <div className="login-wrapper" id="login-content">
          <div className="login-content">
            <a href="#" className="close">
              x
            </a>
            <h3>Login</h3>
            <form method="" action="#">
              <div className="row">
                <label for="username">
                  Username:
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    // pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
                    required="required"
                    value={this.state.username}
                    onChange={this.onChangeLogin}
                  />
                </label>
              </div>

              <div className="row">
                <label for="password">
                  Password:
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="******"
                    // pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                    required="required"
                    value={this.state.password}
                    onChange={this.onChangeLogin}
                  />
                </label>
              </div>
              <div className="row">
                <div className="remember">
                  <div>
                    <input
                      type="checkbox"
                      name="remember"
                      value="Remember me"
                    />
                    <span>Remember me</span>
                  </div>
                  <a href="#">Forget password ?</a>
                </div>
              </div>
              <div className="row">
                <button type="submit" onClick={this.loginButton}>
                  Login
                </button>
              </div>
            </form>
            <div className="row">
              <p>Or via social</p>
              <div className="social-btn-2">
                <a className="fb" href="#">
                  <i className="ion-social-facebook"></i>Facebook
                </a>
                <a className="tw" href="#">
                  <i className="ion-social-twitter"></i>twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* END OF LOG IN */}
        {/* For Sing UP */}
        <div className="login-wrapper" id="signup-content">
          <div className="login-content">
            <a href="#" className="close">
              x
            </a>
            <h3>sign up</h3>
            <form method="" action="">
              <div className="row">
                <label for="username-2">
                  Username:
                  <input
                    type="text"
                    name="username"
                    id="username-2"
                    placeholder="Username"
                    // pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
                    required="required"
                    value={this.state.username}
                    onChange={this.onChangeRegister}
                  />
                </label>
              </div>

              <div className="row">
                <label for="email-2">
                  your email:
                  <input
                    type="text"
                    name="email"
                    id="email-2"
                    placeholder="Email"
                    // pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                    required="required"
                    value={this.state.email}
                    onChange={this.onChangeRegister}
                  />
                </label>
              </div>
              <div className="row">
                <label for="password-2">
                  Password:
                  <input
                    type="password"
                    name="password"
                    id="password-2"
                    placeholder="Password"
                    // pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                    required="required"
                    value={this.state.password}
                    onChange={this.onChangeRegister}
                  />
                </label>
              </div>
              <div className="row">
                <button type="submit" onClick={this.registerButton}>
                  sign up
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* End of SIGN UP */}
        <header className="ht-header">
          <div className="container">
            <nav className="navbar navbar-default navbar-custom">
              <div className="navbar-header logo">
                <div
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <div id="nav-icon1">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <a href="index.html">
                  <img
                    className="logo"
                    src="images/logo1.png"
                    alt=""
                    width="119"
                    height="58"
                  />
                </a>
              </div>
              <div
                className="collapse navbar-collapse flex-parent"
                id="bs-example-navbar-collapse-1"
              >
                <ul className="nav navbar-nav flex-child-menu menu-left">
                  <li className="hidden">
                    <a href="#page-top"></a>
                  </li>
                  <li className="dropdown first">
                    <a href="/" className="btn btn-default ">
                      Home
                    </a>
                  </li>
                  <li className="dropdown first">
                    <NavLink to="/movies" className="btn btn-default">
                      movies
                    </NavLink>
                  </li>

                  <li className="dropdown first">
                    <NavLink to="/series">series</NavLink>
                  </li>

                  <li className="dropdown first">
                    <a href="#" className="btn btn-default">
                      about us
                    </a>
                  </li>
                </ul>
                <ul className="nav navbar-nav flex-child-menu menu-right">
                  <li className="loginLink">
                    <a href="#">LOG In</a>
                  </li>
                  <li className="btn signupLink">
                    <a href="#">sign up</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
