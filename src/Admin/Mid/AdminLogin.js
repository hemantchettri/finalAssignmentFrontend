import axios from "axios";
import { NavLink } from "react-router-dom";
const { Component } = require("react");

class AdminLogin extends Component {
  state = {
    username: "",
    password: "",
  };

  onChangeAdminLogin = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  loginAdminButton = (e) => {
    e.preventDefault();
    const loginAdminData = {
      username: this.state.username,
      password: this.state.password,
    };
    axios
      .post("http://localhost:90/admin/login", loginAdminData)
      .then((result) => {
        console.log(result.data.t);
        window.location.href = "/userdetails";
        localStorage.setItem("token", result.data.t);
        localStorage.setItem("id", result.data.userId);
        localStorage.setItem("userType", "ADMIN");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    return (
      <>
        <form>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.onChangeAdminLogin}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="*****"
            value={this.state.password}
            onChange={this.onChangeAdminLogin}
          />{" "}
          <br />
          <button type="submit" onClick={this.loginAdminButton}>
            Login
          </button>
          <p>Dont have an account</p>
          <NavLink to="/admin/signup">Sign Up</NavLink>
        </form>
      </>
    );
  }
}

export default AdminLogin;
