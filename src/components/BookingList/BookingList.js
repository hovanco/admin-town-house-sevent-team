import React, { Component } from "react";
import BookingItem from "../BookingItem/BookingItem";
import { connect } from "react-redux";
import { actFetchBookingsRequest, actDeleteBookingRequest } from "./../../actions/Bookings";

class BookingList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      booking_Ids: []
    }
  }

  componentDidMount() {
    this.props.fetchAllBookings();
  }

  onDelete = (id) => {
    this.props.onDeleteBooking(id);
  }

  handleOnSelect = id => {
    const { booking_Ids } = this.state
    if (booking_Ids.includes(id)) {
      this.setState({ // delete 1 elemwent of array  on store
        booking_Ids: [...booking_Ids.filter(element => element !== id)]
      })
    } else {
      this.setState({ // add 1 elemwent of array  on store
        booking_Ids: [...booking_Ids, id]
      })
    }
  }

  showBookings(bookings) {
    var result = null;
    if (bookings) {
      if (bookings.length > 0) {
        bookings = bookings.sort((a, b) => b.id - a.id); // sort by value, => sort by id
        result = bookings.map((booking, index) => {
          return (
            <BookingItem
              onSelect={this.handleOnSelect}
              key={index}
              booking={booking}
              index={index}
              checked={this.state.booking_Ids.includes(booking.id)} //props attribute of input tag in ProductItem
              onDelete={this.onDelete}
            />
          );
        });
      }
    }
    return result;
  }

  handleOnDeleteSelectedIds = () => {
    const { booking_Ids } = this.state
    booking_Ids.forEach(booking_Id => {
      this.props.onDeleteBooking(booking_Id);
    });
  }
  
  render() {
    const { bookings } = this.props;
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">LIST USER</h3>
        </div>
        <div className="panel-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th></th>
                <th>No.</th>
                <th>FullName</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.showBookings(bookings.data)}
            </tbody>
          </table>
          <button
            onClick={this.handleOnDeleteSelectedIds}
            type="button"
            className="btn btn-danger btn-delete">Delete</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bookings: state.bookings
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllBookings: () => {
      dispatch(actFetchBookingsRequest());
    },
    onDeleteBooking: (id) => {
      dispatch(actDeleteBookingRequest(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingList);
