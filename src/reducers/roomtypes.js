import * as Types from "./../constants/ActionTypes";
var initialStateRoomType = {
  loading: false,
  data: []
};

var findIndex = (room_types, id) => {
  var result = -1;
  room_types.data.forEach((room_type, index) => {
    if (room_type.id === id) {
      result = index;
    }
  });
  return result;
}

const room_types = (state = initialStateRoomType, action) => {
  var index = -1;
  var { id, room_type } = action;
  switch (action.type) {
    case Types.FETCH_ROOM_TYPES:
      state = action.room_types;
      return { ...state };
    case Types.DELETE_ROOM_TYPE:
      index = findIndex(state, id);
      state.splice(index, 1);
      return { ...state };
    case Types.ADD_ROOM_TYPE:
      state.data.push(action.room_type); 
      return { ...state };
    case Types.UPDATE_ROOM_TYPE:
      index = findIndex(state, room_type.id); 
      state[index] = room_type;
      return { ...state };
    default: return { ...state };
  }
};

export default room_types;
