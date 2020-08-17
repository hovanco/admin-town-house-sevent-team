import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import CityList from "../CityList/CityList";
import { Link } from "react-router-dom";

class Citys extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Link to="/city/add" className="btn btn-success mb-10">Add New City</Link>
          <CityList />
        </div>
      </>
    );
  }
}

export default Citys;
