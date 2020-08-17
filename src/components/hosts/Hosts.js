import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import HostList from "../HostList/HostList";
import { Link } from "react-router-dom";

class Hosts extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Link to="/host/add" className="btn btn-success mb-10">Add New Host</Link>
          <HostList />
        </div>
      </>
    );
  }
}

export default Hosts;
