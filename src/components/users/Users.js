import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import UserList from "../UserList/UserList";
import { Link } from "react-router-dom";

class Users extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Link to="/user/add" className="btn btn-success mb-10">Add New User</Link>
          <UserList />
        </div>
      </>
    );
  }
}

export default Users;
