import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from "../types";
import {
  setCookie,
  getCookie,
  deleteCookie,
} from "../../utils/cookiesHandlers";

import { loginRequest } from "../api";

export const login = (loginData) => {
  return function (dispatch) {
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
