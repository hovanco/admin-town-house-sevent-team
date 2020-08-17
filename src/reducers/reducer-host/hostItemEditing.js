import * as Types from "../../constants/ActionTypes";

var initialStateHost = {};

const hostItemEditing = (state = initialStateHost, action) => {
  switch (action.type) {
    case Types.EDIT_HOST:
      return action.host.data; // data ,to show data - update
    default:
      return state;
  }
}

export default hostItemEditing;