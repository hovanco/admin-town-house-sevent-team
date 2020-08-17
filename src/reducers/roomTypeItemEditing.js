import * as Types from "./../constants/ActionTypes";

var initialStateRoomType = {};


const roomTypeItemEditing = (state = initialStateRoomType, action) => {
  switch (action.type) {
    case Types.EDIT_ROOM_TYPE:
      return action.room_type.data; // data ,to show data - update
    default:
      return state;
  }
}

export default roomTypeItemEditing;