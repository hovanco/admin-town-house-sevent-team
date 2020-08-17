import * as Types from "./../constants/ActionTypes";
import { callApi } from "./../utils/apiCaller";

const token = localStorage.getItem("_access_token");

// **********************************************FETCH USERS********************************************
export const actFetchUsersRequest = () => {
  return (dispatch) => {
    return callApi("users?pageSize=15&sortBy=id", "GET", null).then(res => {
      dispatch(actFetchUsers(res.data))
    });
  };
}

export const actFetchUsers = (users) => {
  return {
    type: Types.FETCH_USERS,
    users
  }
}
// **********************************************DELETE USER********************************************
export const actDeleteUserRequest = (id) => {
  return dispatch => {
    return callApi(`users?pageSize=15&sortBy=id/${id}`, "DELETE", null, token).then(res => {
      dispatch(actFetchUsersRequest())
    });
  }
}

export const actDeleteUser = (id) => {
  return {
    type: Types.DELETE_USER,
    id
  }
}
// **********************************************ADD USER********************************************
export const actAddUserRequest = (user) => {
  return dispatch => {
    return callApi(`users?pageSize=15&sortBy=id`, "POST", user, token).then(res => {
      return callApi(`users?pageSize=15&sortBy=id`).then(ress => { 
        dispatch(actFetchUsers(ress.data));
      })
    });
  }
}

export const actAddUser = (user) => {
  return {
    type: Types.ADD_USER,
    user
  }
}
// **********************************************GET USER********************************************
export const actGetUserRequest = (id) => {
  return dispatch => {
    return callApi(`users?pageSize=15&sortBy=id/${id}`, "GET").then(res => {
      dispatch(actGetUser(res.data));
    });
  }
}

export const actGetUser = (user) => {
  return {
    type: Types.EDIT_USER,
    user
  }
}
// **********************************************UPDATE USER********************************************
export const actUpdateUserRequest = (user) => {
  return dispatch => {
    return callApi(`users?pageSize=15&sortBy=id/${user.id}`, "PUT", user, token).then(res => {
      return callApi(`users?pageSize=15&sortBy=id`).then(ress => { 
        dispatch(actFetchUsers(ress.data));
      })
    });
  }
}

export const actUpdateUser = (user) => {
  return {
    type: Types.UPDATE_USER,
    user
  }
}
