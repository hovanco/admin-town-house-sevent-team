import * as Types from "./../constants/ActionTypes";

var initialState = {};

const itemEditing = (state = initialState, action) => {
  switch (action.type) {
    case Types.EDIT_PRODUCT:
      return action.product.data; // data ,to show data - update
    default:
      return state;
  }
}

export default itemEditing;