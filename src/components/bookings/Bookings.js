import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import BookingList from "../BookingList/BookingList";
import { Link } from "react-router-dom";

class Bookings extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Link to="/booking/add" className="btn btn-success mb-10">Add New Booking</Link>
          <BookingList />
        </div>
      </>
    );
  }
}

export default Bookings;
