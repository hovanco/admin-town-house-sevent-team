import * as Types from "./../constants/ActionTypes";
import { callApi } from "./../utils/apiCaller";

const token = localStorage.getItem("_access_token");

// **********************************************FETCH LANGUAGES********************************************
export const actFetchLanguagesRequest = () => {
  return (dispatch) => {
    return callApi("admin/languages", "GET", null).then(res => {
      dispatch(actFetchLanguages(res.data))
    });
  };
}

export const actFetchLanguages = (languages) => {
  return {
    type: Types.FETCH_LANGUAGES,
    languages
  }
}
// **********************************************DELETE LANGUAGE********************************************
export const actDeleteLanguageRequest = (id) => {
  return dispatch => {
    return callApi(`admin/languages/${id}`, "DELETE", null, token).then(res => {
      dispatch(actFetchLanguagesRequest())
    });
  }
}

export const actDeleteLanguage = (id) => {
  return {
    type: Types.DELETE_LANGUAGE,
    id
  }
}
// **********************************************ADD LANGUAGE********************************************
export const actAddLanguageRequest = (language) => {
  return dispatch => {
    return callApi(`admin/languages`, "POST", language, token).then(res => {
      return callApi(`admin/languages`).then(ress => { 
        dispatch(actFetchLanguages(ress.data));
      })
    });
  }
}

export const actAddLanguage = (language) => {
  return {
    type: Types.ADD_LANGUAGE,
    language
  }
}
// **********************************************GET LANGUAGES********************************************
export const actGetLanguageRequest = (id) => {
  return dispatch => {
    return callApi(`admin/languages/${id}`, "GET").then(res => {
      dispatch(actGetLanguage(res.data));
    });
  }
}

export const actGetLanguage = (language) => {
  return {
    type: Types.EDIT_LANGUAGE,
    language
  }
}
// **********************************************UPDATE LANGUAGE********************************************
export const actUpdateLanguageRequest = (language) => {
  return dispatch => {
    return callApi(`admin/languages/${language.id}`, "PUT", language, token).then(res => {
      return callApi(`admin/languages`).then(ress => { 
        dispatch(actFetchLanguages(ress.data));
      })
    });
  }
}

export const actUpdateLanguage = (language) => {
  return {
    type: Types.UPDATE_LANGUAGE,
    language
  }
}
