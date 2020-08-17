import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import "./Style_Navbar.css";

const MenuLink = ({ label, to, activeOnlyWhenExact }) => { // custom link
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active abc" : "";
        return (
          <li className={`my-li ${active}`}>
            <Link
              to={to}
              className="my-link">
              {label}
            </Link>
          </li>
        )
      }}
    />
  );
}

class Navbar extends Component {
  logOut = () => {
    localStorage.removeItem("_access_token") //get token
    localStorage.removeItem("_admin_user") //get user
    this.props.history.push(`/`)
  }

  render() {
    const user = JSON.parse(localStorage.getItem('_admin_user')) //get user
    return (
      <div className="navbar-containner">
        <nav className="navbar-top">
          <a href="/" className="logo">SEVENT TEAM</a>
          <label id="toggler" htmlFor="box-1">
            <span>MENU <i className="fas fa-bars" /></span>
          </label>
          <ul>
            <MenuLink label="Home" to="/" activeOnlyWhenExact={true} />
            {user ?
              <>
                <MenuLink label="Categories" to="/categories" activeOnlyWhenExact={false} />
                <MenuLink label="RoomType" to="/roomtypes" activeOnlyWhenExact={false} />
                <MenuLink label="City" to="/citys" activeOnlyWhenExact={false} />
                <MenuLink label="Language" to="/languages" activeOnlyWhenExact={false} />
                <MenuLink label="User" to="/users" activeOnlyWhenExact={false} />
                <MenuLink label="Host" to="/hosts" activeOnlyWhenExact={false} />
                <MenuLink label="Booking" to="/bookings" activeOnlyWhenExact={false} />
                <strong className="show-username">{user.username || ""}</strong>
                <i className="fa fa-user fa-2x" aria-hidden="true"></i>
                <a href="/" onClick={this.logOut} className="link-logout">Logout</a>
              </> :
              <>
                <MenuLink label="Login" to="/login" activeOnlyWhenExact={false} />
              </>
            }
          </ul>
          <div id="navbar-form">
            <form action="true" id="search-form">
              <input type="search" placeholder="Search" id="search-bar" />
              <button id="search-btn" type="submit">
                <span><i className="fas fa-search" /></span>
              </button>
            </form>
            <label htmlFor="box-2" id="search-form-opener">
              <span><i className="fas fa-search" /></span>
            </label>
            <label htmlFor="box-2" id="search-form-closer">
              <span><i className="fas fa-times" /></span>
            </label>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
