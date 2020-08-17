import React, { Component } from "react";
import UserList from "./../../components/UserList/UserList";
import { Link } from "react-router-dom";

class UserListPage extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/product/add" className="btn btn-success mb-10">Add New User</Link>
        <UserList />
      </div>
    );
  }
}

export default UserListPage;
