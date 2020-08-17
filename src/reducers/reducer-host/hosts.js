import * as Types from "../../constants/ActionTypes";

var initialStateHost = {
  loading: false,
  data: []
};

var findIndex = (hosts, id) => {
  var result = -1;
  hosts.data.forEach((host, index) => {
    if (host.id === id) {
      result = index;
    }
  });
  return result;
}

const hosts = (state = initialStateHost, action) => {
  var index = -1;
  var { id, host } = action;
  switch (action.type) {
    case Types.FETCH_HOSTS:
      state = action.hosts;
      return { ...state };
    case Types.DELETE_HOST:
      index = findIndex(state, id);
      state.splice(index, 1);
      return { ...state };
    case Types.ADD_HOST:
      state.data.push(action.host); 
      return { ...state };
    case Types.UPDATE_HOST:
      index = findIndex(state, host.id); 
      state[index] = host;
      return { ...state };
    default: return { ...state };
  }
};

export default hosts;
