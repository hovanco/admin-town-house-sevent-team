import * as Types from "../../constants/ActionTypes";

var initialStateCity = {};

const cityItemEditing = (state = initialStateCity, action) => {
  switch (action.type) {
    case Types.EDIT_CITY:
      return action.city.data; // data ,to show data - update
    default:
      return state;
  }
}

export default cityItemEditing;