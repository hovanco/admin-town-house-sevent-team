import * as Types from "../../constants/ActionTypes";

var initialStateBookings = {};

const bookingItemEditing = (state = initialStateBookings, action) => {
  switch (action.type) {
    case Types.EDIT_BOOKING:
      return action.booking.data; // toi them data
    default:
      return state;
  }
}

export default bookingItemEditing;
