import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILED } from "../types";
import { logoutRequest } from "../api";

import {
  setCookie,
  getCookie,
  deleteCookie,
} from "../../utils/cookiesHandlers";


export const logout = () => {
  return function(dispatch){
    dispatch({type: LOGOUT_REQUEST})
    logoutRequest()
    .then((res) => {
      if (res && res.success) {
        deleteCookie('token')
        deleteCookie('refreshToken')
        dispatch({type:LOGOUT_SUCCESS})
      }
      else {
        dispatch({type:LOGOUT_FAILED})
      }
    })
    .catch((err) => {
      console.error(err);
      dispatch({type:LOGOUT_FAILED})
    })
  }
}