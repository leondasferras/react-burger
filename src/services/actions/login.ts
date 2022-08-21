import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from "../types";
import {
  setCookie,
} from "../../utils/cookiesHandlers";

import { TUser, AppDispatch, AppThunk, TUserData } from "../../utils/types";
import { loginRequest } from "../api";
import { store } from "../store";



interface ILoginRequestAction {
  readonly type: typeof LOGIN_REQUEST;
}

interface ILoginSuccessAction {
  readonly type: typeof LOGIN_SUCCESS;
  readonly payload: TUser
}

interface ILoginFailed {
  readonly type: typeof LOGIN_FAILED;
}

export type TLoginActions = ILoginRequestAction|ILoginSuccessAction|ILoginFailed




export const login = (loginData:TUserData) => {
  return function (dispatch:AppDispatch) {
    dispatch({ type: LOGIN_REQUEST });
    loginRequest(loginData)
      .then((res) => {
        if (res && res.success) {
          const authToken = res.accessToken.split("Bearer ")[1];
          const refreshToken = res.refreshToken;
          setCookie("authToken", authToken);
          setCookie("refreshToken", refreshToken);
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.user,
          });
        } else {
          dispatch({
            type: LOGIN_FAILED,
          });
        }
      })
      .catch((err) => {
        console.error(err);
        dispatch({
          type: LOGIN_FAILED,
        });
      });
  };
};
