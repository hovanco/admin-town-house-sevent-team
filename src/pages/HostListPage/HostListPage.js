import React, { Component } from "react";
import HostList from "./../../components/HostList/HostList";
import { Link } from "react-router-dom";

class HostListPage extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/host/add" className="btn btn-success mb-10">Add New Host</Link>
        <HostList />
      </div>
    );
  }
}

export default HostListPage;
