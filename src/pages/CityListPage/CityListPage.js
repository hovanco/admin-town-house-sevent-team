import React, { Component } from "react";
import CityList from "./../../components/CityList/CityList";
import { Link } from "react-router-dom";

class CityListPage extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/city/add" className="btn btn-success mb-10">Add New City</Link>
        <CityList />
      </div>
    );
  }
}

export default CityListPage;
