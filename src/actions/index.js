// action of store
import * as Types from "./../constants/ActionTypes";
import { callApi } from "./../utils/apiCaller";

const token = localStorage.getItem("_access_token")

// **********************************************FETCH PRODUCTS********************************************
export const actFetchProductsRequest = () => {
  return (dispatch) => {
    return callApi("admin/host-categories", "GET", null).then(res => {
      dispatch(actFetchProducts(res.data))
    });
  };
}

export const actFetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products
  }
}
// **********************************************DELETE PRODUCT********************************************
export const actDeleteProductRequest = (id) => {
  return dispatch => {
    return callApi(`admin/host-categories/${id}`, "DELETE", null, token).then(res => {
      dispatch(actFetchProductsRequest())
    });
  }
}

export const actDeleteProduct = (id) => {
  return {
    type: Types.DELETE_PRODUCT,
    id
  }
}
// **********************************************ADD PRODUCT********************************************
export const actAddProductRequest = (product) => {
  return dispatch => {
    return callApi(`admin/host-categories`, "POST", product, token).then(res => {
      return callApi(`admin/host-categories`).then(ress => { 
        dispatch(actFetchProducts(ress.data));
      })
    });
  }
}

export const actAddProduct = (product) => {
  return {
    type: Types.ADD_PRODUCT,
    product
  }
}
// **********************************************GET PRODUCTS********************************************
export const actGetProductRequest = (id) => {
  return dispatch => {
    return callApi(`admin/host-categories/${id}`, "GET").then(res => {
      dispatch(actGetProduct(res.data));
    });
  }
}

export const actGetProduct = (product) => {
  return {
    type: Types.EDIT_PRODUCT,
    product
  }
}
// **********************************************UPDATE PRODUCT********************************************
export const actUpdateProductRequest = (product) => {
  return dispatch => {
    return callApi(`admin/host-categories/${product.id}`, "PUT", product, token).then(res => {
      return callApi(`admin/host-categories`).then(ress => { 
        dispatch(actFetchProducts(ress.data));
      })
    });
  }
}

export const actUpdateProduct = (product) => {
  return {
    type: Types.UPDATE_PRODUCT,
    product
  }
}
