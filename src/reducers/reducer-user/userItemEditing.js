import * as Types from "../../constants/ActionTypes";

var initialStateUsers = {};

const usersItemEditing = (state = initialStateUsers, action) => {
  switch (action.type) {
    case Types.EDIT_USER:
      return action.user.data; // data ,to show data - update
    default:
      return state;
  }
}

export default usersItemEditing;