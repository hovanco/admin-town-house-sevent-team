import * as Types from "../../constants/ActionTypes";
var initialStateCity = {
  loading: false,
  data: []
};

var findIndex = (citys, id) => {
  var result = -1;
  citys.data.forEach((city, index) => {
    if (city.id === id) {
      result = index;
    }
  });
  return result;
}

const citys = (state = initialStateCity, action) => {
  var index = -1;
  var { id, city } = action;
  switch (action.type) {
    case Types.FETCH_CITYS:
      state = action.citys;
      return { ...state };
    case Types.DELETE_CITY:
      index = findIndex(state, id);
      state.splice(index, 1);
      return { ...state };
    case Types.ADD_CITY:
      state.data.push(action.city); 
      return { ...state };
    case Types.UPDATE_CITY:
      index = findIndex(state, city.id); 
      state[index] = city;
      return { ...state };
    default: return { ...state };
  }
};

export default citys;
