import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
} from "../types";

import { setCookie, getCookie, deleteCookie } from "../../utils/cookiesHandlers";
import { registrationRequest } from "../api";

export const registration = (regData) => {
  return function (dispatch) {
    dispatch({
      type: REGISTRATION_REQUEST,
    });
    registrationRequest(regData)
      .then((res) => {
        if (res && res.success) {
          const authToken = res.accessToken.split('Bearer ')[1];
					const refreshToken = res.refreshToken;
          setCookie("authToken", authToken )
          setCookie("refreshToken", refreshToken )
          dispatch({
            type: REGISTRATION_SUCCESS,
            payload: res.user,
          });
        } else {
          dispatch({
            type: REGISTRATION_FAILED,
          });
        }
      })
      .catch((err) => {
        console.error(err);
        dispatch({
          type: REGISTRATION_FAILED,
        });
      });
  };
};
