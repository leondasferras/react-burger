import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
} from "../types";

import { setCookie, getCookie, deleteCookie } from "../../utils/cookiesHandlers";
import { registrationRequest } from "../api";
import { TUser, AppDispatch, AppThunk, TUserData } from "../../utils/types";


export interface IRegisterRequestAction {
	readonly type: typeof REGISTRATION_REQUEST;
}

export interface IRegisterSuccessAction {
	readonly type: typeof REGISTRATION_SUCCESS;
	readonly payload: TUser;
}

export interface IRegisterFailedAction {
	readonly type: typeof REGISTRATION_FAILED;
}



export type TRegistrationActions = IRegisterRequestAction | IRegisterSuccessAction | IRegisterFailedAction;


export const registration = (regData:TUserData) => {
  return function (dispatch:AppDispatch) {
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
