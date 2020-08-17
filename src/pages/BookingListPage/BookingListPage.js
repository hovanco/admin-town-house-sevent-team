import React, { Component } from "react";
import BookingList from "./../../components/BookingList/BookingList";
import { Link } from "react-router-dom";

class BookingListPage extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/booking/add" className="btn btn-success mb-10">Add New User</Link>
        <BookingList />
      </div>
    );
  }
}
export default BookingListPage;