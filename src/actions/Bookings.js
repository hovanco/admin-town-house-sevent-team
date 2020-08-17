import * as Types from "./../constants/ActionTypes";
import { callApi } from "./../utils/apiCaller";

const token = localStorage.getItem("_access_token");

// **********************************************FETCH BOOKINGS********************************************
export const actFetchBookingsRequest = () => {
  return (dispatch) => {
    return callApi("users?pageSize=15&sortBy=id", "GET", null).then(res => {
      dispatch(actFetchBookings(res.data))
    });
  };
}

export const actFetchBookings = (bookings) => {
  return {
    type: Types.FETCH_BOOKINGS,
    bookings
  }
}
// **********************************************DELETE BOOKING********************************************
export const actDeleteBookingRequest = (id) => {
  return dispatch => {
    return callApi(`users?pageSize=15&sortBy=id/${id}`, "DELETE", null, token).then(res => {
      dispatch(actFetchBookingsRequest())
    });
  }
}

export const actDeleteBooking = (id) => {
  return {
    type: Types.DELETE_BOOKING,
    id
  }
}
// **********************************************ADD BOOKING********************************************
export const actAddBookingRequest = (booking) => {
  return dispatch => {
    return callApi(`users?pageSize=15&sortBy=id`, "POST", booking, token).then(res => {
      return callApi(`users?pageSize=15&sortBy=id`).then(ress => { 
        dispatch(actFetchBookings(ress.data));
      })
    });
  }
}

export const actAddBooking = (booking) => {
  return {
    type: Types.ADD_BOOKING,
    booking
  }
}
// **********************************************GET BOOKING********************************************
export const actGetBookingRequest = (id) => {
  return dispatch => {
    return callApi(`users?pageSize=15&sortBy=id/${id}`, "GET").then(res => {
      dispatch(actGetBooking(res.data));
    });
  }
}

export const actGetBooking = (booking) => {
  return {
    type: Types.EDIT_BOOKING,
    booking
  }
}
// **********************************************UPDATE BOOKING********************************************
export const actUpdateBookingRequest = (booking) => {
  return dispatch => {
    return callApi(`users?pageSize=15&sortBy=id/${booking.id}`, "PUT", booking, token).then(res => {
      return callApi(`users?pageSize=15&sortBy=id`).then(ress => { 
        dispatch(actFetchBookings(ress.data));
      })
    });
  }
}

export const actUpdateBooking = (booking) => {
  return {
    type: Types.UPDATE_BOOKING,
    booking
  }
}
