import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import RoomTypeList from "../RoomTypeList/RoomTypeList";
import { Link } from "react-router-dom";

class RoomTypes extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Link to="/roomtype/add" className="btn btn-success mb-10">Add New Room Type</Link>
          <RoomTypeList />
        </div>
      </>
    );
  }
}

export default RoomTypes;
