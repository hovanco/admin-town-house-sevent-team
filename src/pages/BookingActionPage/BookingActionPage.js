import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  actAddBookingRequest,
  actGetBookingRequest,
  actUpdateBookingRequest 
} from "./../../actions/Bookings";

class BookingActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtUserName: "",
      txtEmail: "",
      txtPhone: "",
    };
  }

  componentDidMount() {
    var { match } = this.props;
    if (match || "") {
      var id = Number(match.params.id);
      const booking = this.props.bookings.data.forEach(booking =>
        booking.id === id ? this.setState({
        id: booking.id,
        txtName: booking.name,
        txtUserName: booking.username,
        txtEmail: booking.email,
        txtPhone: booking.phone
      }): null)
      if (booking) {
        this.setState({
          id,
          txtName: booking.name,
          txtUserName: booking.username,
          txtEmail: booking.email,
          txtPhone: booking.phone 
        });
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.bookingItemEditing) {
      var { bookingItemEditing } = nextProps;
      this.setState({
        id: bookingItemEditing.id,
        txtName: bookingItemEditing.name,
        txtUserName: bookingItemEditing.username,
        txtEmail: bookingItemEditing.email,
        txtPhone: bookingItemEditing.phone
      });
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  onSave = (e) => {
    e.preventDefault();
    var { id, txtName, txtUserName, txtEmail, txtPhone } = this.state;
    var { history } = this.props;
    var booking = {
      id: id,
      name: txtName,
      username: txtUserName,
      email: txtEmail,
      phone: txtPhone
    }
    if (id === Number(this.props.match.params.id)) { //update product by id
      this.props.onUpdateBooking(booking);
    } else { //add new product by id
      this.props.onAddBooking(booking);
    }
    history.goBack();
  }

  goBack = () => {// button cancel
    this.props.history.goBack();
  }

  render() {
    var { txtName, txtUserName, txtEmail, txtPhone } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>FullName:</label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              value={txtName || ""}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>UserName:</label>
            <input
              type="text"
              className="form-control"
              name="txtUserName"
              value={txtUserName || ""}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              name="txtEmail"
              value={txtEmail || ""}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="number"
              className="form-control"
              name="txtPhone"
              value={txtPhone || ""}
              onChange={this.onChange}
            />
          </div>
          <Link to="/booking-list" className="btn btn-danger mr-10" onClick={this.goBack}>Cancel</Link>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bookings: state.bookings,
    bookingItemEditing: state.bookingItemEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddBooking: (user) => {
      dispatch(actAddBookingRequest(user)); // add data
    },
    onEditBooking: (id) => {
      dispatch(actGetBookingRequest(id)); // show data
    },
    onUpdateBooking: (user) => {
      dispatch(actUpdateBookingRequest(user)); // // update data
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingActionPage);
