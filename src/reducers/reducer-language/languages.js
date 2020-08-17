import * as Types from "../../constants/ActionTypes";

var initialStateLanguages = {
  loading: false,
  data: []
};

var findIndex = (languages, id) => {
  var result = -1;
  languages.data.forEach((language, index) => {
    if (language.id === id) {
      result = index;
    }
  });
  return result;
}

const languages = (state = initialStateLanguages, action) => {
  var index = -1;
  var { id, language } = action;
  switch (action.type) {
    case Types.FETCH_LANGUAGES:
      state = action.languages;
      return { ...state };
    case Types.DELETE_LANGUAGE:
      index = findIndex(state, id);
      state.splice(index, 1);
      return { ...state };
    case Types.ADD_LANGUAGE:
      state.data.push(action.language); 
      return { ...state };
    case Types.UPDATE_LANGUAGE:
      index = findIndex(state, language.id); 
      state[index] = language;
      return { ...state };
    default: return { ...state };
  }
};

export default languages;
