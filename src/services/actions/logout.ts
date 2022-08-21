import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILED } from "../types";
import { logoutRequest } from "../api";

import {
  setCookie,
  getCookie,
  deleteCookie,
} from "../../utils/cookiesHandlers";

import {AppDispatch} from "../../utils/types";


interface ILogoutRequestAction {
  readonly type: typeof LOGOUT_REQUEST;
}

interface ILogoutSuccessAction {
  readonly type: typeof LOGOUT_SUCCESS;
}

interface ILogoutFailedAction {
  readonly type: typeof LOGOUT_FAILED;
}


export type TLogoutActions = ILogoutRequestAction | ILogoutSuccessAction | ILogoutFailedAction;



export const logout = () => {
  return function(dispatch:AppDispatch){
    dispatch({type: LOGOUT_REQUEST})
    logoutRequest()
    .then((res) => {
      if (res && res.success) {
        deleteCookie('authToken')
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