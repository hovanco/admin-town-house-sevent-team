// action of store
import * as Types from "./../constants/ActionTypes";
import { callApi } from "./../utils/apiCaller";

const token = localStorage.getItem("_access_token")

// **********************************************FETCH ROOM TYPES********************************************
export const actFetchRoomTypesRequest = () => {
  return (dispatch) => {
    return callApi("admin/host-room-types", "GET", null).then(res => {
      dispatch(actFetchRoomTypes(res.data))
    });
  };
}

export const actFetchRoomTypes = (room_types) => {
  return {
    type: Types.FETCH_ROOM_TYPES,
    room_types
  }
}
// **********************************************DELETE ROOM TYPE********************************************
export const actDeleteRoomTypeRequest = (id) => {
  return dispatch => {
    return callApi(`admin/host-room-types/${id}`, "DELETE", null, token).then(res => {
      dispatch(actFetchRoomTypesRequest())
    });
  }
}

export const actDeleteRoomType = (id) => {
  return {
    type: Types.DELETE_ROOM_TYPE,
    id
  }
}
// **********************************************ADD ROOM TYPE********************************************
export const actAddRoomTypeRequest = (room_type) => {
  return dispatch => {
    return callApi(`admin/host-room-types`, "POST", room_type, token).then(res => {
      return callApi(`admin/host-room-types`).then(ress => { // fetch lai sai khi them xong de khoi fai reload
        dispatch(actFetchRoomTypes(ress.data));
      })
    });
  }
}

export const actAddRoomType = (room_type) => {
  return {
    type: Types.ADD_ROOM_TYPE,
    room_type
  }
}
// **********************************************GET ROOM TYPES********************************************
export const actGetRoomTypeRequest = (id) => {
  return dispatch => {
    return callApi(`admin/host-room-types/${id}`, "GET").then(res => {
      dispatch(actGetRoomType(res.data));
    });
  }
}

export const actGetRoomType = (room_type) => {
  return {
    type: Types.EDIT_ROOM_TYPE,
    room_type
  }
}
// **********************************************UPDATE ROOM TYPE********************************************
export const actUpdateRoomTypeRequest = (room_type) => {
  return dispatch => {
    return callApi(`admin/host-room-types/${room_type.id}`, "PUT", room_type, token).then(res => {
      return callApi(`admin/host-room-types`).then(ress => { // fetch lai sai khi update xong de khoi fai reload
        dispatch(actFetchRoomTypes(ress.data));
      })
    });
  }
}

export const actUpdateRoomType = (room_type) => {
  return {
    type: Types.UPDATE_ROOM_TYPE,
    room_type
  }
}
