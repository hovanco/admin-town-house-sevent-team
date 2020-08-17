import React, { Component } from "react";
import RoomTypeList from "./../../components/RoomTypeList/RoomTypeList";
import { Link } from "react-router-dom";

class RoomTypeListPage extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/roomtype/add" className="btn btn-success mb-10">Add New Product</Link>
        <RoomTypeList />
      </div>
    );
  }
}

export default RoomTypeListPage;
