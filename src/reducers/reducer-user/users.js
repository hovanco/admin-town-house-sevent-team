import * as Types from "../../constants/ActionTypes";

var initialStateUsers = {
  loading: false,
  data: []
};

var findIndex = (users, id) => {
  var result = -1;
  users.data.forEach((user, index) => {
    if (user.id === id) {
      result = index;
    }
  });
  return result;
}

const users = (state = initialStateUsers, action) => {
  var index = -1;
  var { id, user } = action;
  switch (action.type) {
    case Types.FETCH_USERS:
      state = action.users;
      return { ...state };
    case Types.DELETE_USER:
      index = findIndex(state, id);
      state.splice(index, 1);
      return { ...state };
    case Types.ADD_USER:
      state.data.push(action.user); 
      return { ...state };
    case Types.UPDATE_USER:
      index = findIndex(state, user.id); 
      state[index] = user;
      return { ...state };
    default: return { ...state };
  }
};

export default users;
