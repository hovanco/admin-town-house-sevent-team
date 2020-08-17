import * as Types from "../../constants/ActionTypes";

var initialStateBookings = {
  loading: false,
  data: []
};

var findIndex = (bookings, id) => {
  var result = -1;
  bookings.data.forEach((booking, index) => {
    if (booking.id === id) {
      result = index;
    }
  });
  return result;
}

const bookings = (state = initialStateBookings, action) => {
  var index = -1;
  var { id, booking } = action;
  switch (action.type) {
    case Types.FETCH_BOOKINGS:
      state = action.bookings;
      return { ...state };
    case Types.DELETE_BOOKING:
      index = findIndex(state, id);
      state.splice(index, 1);
      return { ...state };
    case Types.ADD_BOOKING:
      state.data.push(action.booking); 
      return { ...state };
    case Types.UPDATE_BOOKING:
      index = findIndex(state, booking.id); 
      state[index] = booking;
      return { ...state };
    default: return { ...state };
  }
};

export default bookings;
