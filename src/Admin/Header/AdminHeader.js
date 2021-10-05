import { Component } from "react";
import { NavLink } from "react-router-dom";

class AdminHeader extends Component {
  adminLogout = (e) => {
    localStorage.clear();
    // this.props.history.push("/admin/login");
    window.location = "/admin/login";
  };

  render() {
    if (localStorage.getItem("token")) {
      var adminMenu = (
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
            <a href="/">
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
                <NavLink to="/userdetails" className="btn btn-default ">
                  Users
                </NavLink>
              </li>
              <li className="dropdown first">
                <NavLink to="/movie/show" className="btn btn-default">
                  movies
                </NavLink>
              </li>

              <li className="dropdown first">
                <NavLink to="/movieinsert" className="btn btn-default">
                  Movie Insert
                </NavLink>
              </li>

              <li className="dropdown first">
                <NavLink to="#" className="btn btn-default">
                  Series Insert
                </NavLink>
              </li>
            </ul>
            <ul className="nav navbar-nav flex-child-menu menu-right">
              <ul className="nav navbar-nav flex-child-menu menu-right">
                <li className="dropdown first">
                  <a onClick={this.adminLogout}>Log Out</a>
                </li>
              </ul>
            </ul>
          </div>
        </nav>
      );
    } else {
      <p>fdslkdfjasljfdlkjasljdfasfd</p>;
    }
    return (
      <>
        <header className="ht-header">
          <div className="container">{adminMenu}</div>
        </header>
      </>
    );
  }
}

export default AdminHeader;
