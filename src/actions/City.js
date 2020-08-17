// action of store
import * as Types from "./../constants/ActionTypes";
import { callApi } from "./../utils/apiCaller";

const token = localStorage.getItem("_access_token");

// **********************************************FETCH CITYS********************************************
export const actFetchCitysRequest = () => {
  return (dispatch) => {
    return callApi("host-cities", "GET", null).then(res => {
      dispatch(actFetchCitys(res.data))
    });
  };
}

export const actFetchCitys = (citys) => {
  return {
    type: Types.FETCH_CITYS,
    citys
  }
}
// **********************************************DELETE CITY********************************************
export const actDeleteCityRequest = (id) => {
  return dispatch => {
    return callApi(`host-cities/${id}`, "DELETE", null, token).then(res => {
      dispatch(actFetchCitysRequest())
    });
  }
}

export const actDeleteCity = (id) => {
  return {
    type: Types.DELETE_CITY,
    id
  }
}
// **********************************************ADD CITY********************************************
export const actAddCityRequest = (city) => {
  return dispatch => {
    return callApi(`host-cities`, "POST", city, token).then(res => {
      return callApi(`host-cities`).then(ress => { 
        dispatch(actFetchCitys(ress.data));
      })
    });
  }
}

export const actAddCity = (city) => {
  return {
    type: Types.ADD_CITY,
    city
  }
}
// **********************************************GET CITYS********************************************
export const actGetCityRequest = (id) => {
  return dispatch => {
    return callApi(`host-cities/${id}`, "GET").then(res => {
      dispatch(actGetCity(res.data));
    });
  }
}

export const actGetCity = (city) => {
  return {
    type: Types.EDIT_CITY,
    city
  }
}
// **********************************************UPDATE CITY********************************************
export const actUpdateCityRequest = (city) => {
  return dispatch => {
    return callApi(`host-cities/${city.id}`, "PUT", city, token).then(res => {
      return callApi(`host-cities`).then(ress => { 
        dispatch(actFetchCitys(ress.data));
      })
    });
  }
}

export const actUpdateCity = (city) => {
  return {
    type: Types.UPDATE_CITY,
    city
  }
}
